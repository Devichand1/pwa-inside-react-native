
import axios from 'axios';
import * as ApiConstants from './ApiConstant';
import {MMKV} from 'react-native-mmkv';
import { Utility } from '../utility';

const REQUEST_TIMEOUT = 5000;
const NO_INTERNET = 'NO_INTERNET';

export function apiRequest(
  method,
  url,
  headers,
  callbackSuccess,
  params,
  callbackFailure,
  convertParams = true,
  timeout = REQUEST_TIMEOUT,
) {
  Utility.getNetInfo().then((isConnected) => {
    if (!isConnected) {
      Utility.showNoInternetDialog();
      callbackFailure && callbackFailure(NO_INTERNET);
      return;
    }
    let body;
    let query = '';
    if (method === 'POST' || method === 'PUT' || method === 'PATCH') {
      if (convertParams) {
        body = JSON.stringify(params);
      } else {
        body = params;
      }
    } else if (method === 'GET') {
      query = paramsToUrlQueryParams(params);
    } else if (method === 'JSON_POST') {
      body = params;
      method = 'POST';
    } else if (method === 'DELETE') {
      body = params;
    }
    console.log('url', url);
    axios({
      method: method,
      url: url + query,
      data: body,
      timeout: timeout,
      headers: headers,
    })
      .then((response) => {
        if (isSuccess(response)) {
          callbackSuccess && callbackSuccess(response.data);
        } else {
          callbackFailure && callbackFailure(getErrorMesage(response));
        }
      })
      .catch(({response}) => {
        console.log('API_CATCH', response, JSON.stringify(response));
        response &&
          callbackFailure &&
          callbackFailure(getErrorMesage(response));
      });
  });
}

function isSuccess(response) {
  let status;
  if (response.data && isValidStatusCode(response.data.status)) {
    status = response.data.status;
  } else if (response.data && isValidStatusCode(response.data.statusCode)) {
    status = response.data.statusCode;
  } else {
    status = response.status;
  }
  return status >= 200 && status <= 299;
}

function isValidStatusCode(statusCode) {
  return Number.isInteger(statusCode) && statusCode > 199 && statusCode < 600;
}

function getErrorMesage(response) {
  const defaultMessage = 'Something went wrong!';
  if (!response || !response.data || !response.data.message) {
    return defaultMessage;
  }
  const message = response.data.message;
  if (typeof message === 'string') {
    return message;
  } else if (Array.isArray(message) && message.length > 0) {
    return message[0];
  } else return defaultMessage;
}

function paramsToUrlQueryParams(params) {
  const esc = encodeURIComponent;
  let query = '';
  if (params) {
    query = '?';
    query += Object.keys(params)
      .map((k) => esc(k) + '=' + esc(params[k]))
      .join('&');
  }
  return query;
}

export function paramsToBody(params) {
  if (!params || params.length < 1) {
    console.warn('response : empty params');
    return null;
  }

  const body = new FormData();
  for (let k in params) {
    body.append(k, params[k]);
  }
  return body;
}

export function getHeader() {
  const token = MMKV.getString('authToken');
  if (token) {
    return {
      Authorization: `Bearer ${token}`,
    };
  }
}
export function getHeaderUpload() {
  const token = MMKV.getString('authToken');
  if (token) {
    return {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'multipart/form-data',
    };
  }
}

// api calls
export function loginReq(params, callbackSuccess, callbackFailure) {
  console.log(ApiConstants.baseUrlLive);
  apiRequest(
    'POST',
    ApiConstants.baseUrlLive + ApiConstants.LOGIN_ENDPOINT,
    ApiConstants.headers,
    callbackSuccess,
    params,
    callbackFailure,
    false,
  );
}

