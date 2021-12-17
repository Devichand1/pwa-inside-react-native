import axios from "axios";
import {categoryEndPoint, loginEndPoint, productsEndPoint,user, registerEndPoint, orders, flashsaleEndPoint, top25EndPoint, subCategory, banner } from "./ApiConstant";


const axiosInstance = axios.create({
    baseURL: "https://ecomstrapi.herokuapp.com/"
})
const getHeader=()=>{
    // const getToken = userdata.jwt;
    return { headers:{
        'Authorization': `Bearer ${token}`
    }
    }
}

 export const LoginReq=(data, success, failure)=>{
    axiosInstance.post(loginEndPoint, {...data} )
    .then(res=>success(res))
    .catch(res=>failure(res))
}

export const RegisterReq=(data, success, failure)=>{
    axiosInstance.post(registerEndPoint, {...data} )
    .then(res=>success(res))
    .catch(res=>failure(res))
}

export const categoriesReq=(success, failure)=>{
    axiosInstance.get(categoryEndPoint)
    .then(res=>success(res))
    .catch(res=>failure(res))
}
export const productsReq=(success, failure)=>{
    axiosInstance.get(productsEndPoint)
    .then(res=>success(res))
    .catch(res=>failure(res))
}

export const flashSaleReq=(success, failure)=>{
    axiosInstance.get(flashsaleEndPoint)
    .then(res=>success(res))
    .catch(res=>failure(res))
}

export const top25Req=(success, failure)=>{
    axiosInstance.get(top25EndPoint)
    .then(res=>success(res))
    .catch(res=>failure(res))
}
export const addtoCartReq=(url, data, success, failure)=>{
    console.log("url",url)
    axiosInstance.put(url, {...data}, getHeader())
    .then(res=>success(res))
    .catch(res=>failure(res))
}
export const createOrderReq=(data, success, failure)=>{
    axiosInstance.post(orders, {...data})
    .then(res=>success(res))
    .catch(res=>failure(res))
}
export const getOrderReq=(data, success, failure)=>{
    axiosInstance.get(orders, {...data})
    .then(res=>success(res))
    .catch(res=>failure(res))
}
export const orderReq=(id, data, success, failure)=>{
    console.log("url",`${user}/${id}`)
    axiosInstance.put(`${user}/${id}`,{"orders": data})
    .then(res=>success(res))
    .catch(res=>failure(res))
}
export const getmyDataReq=(id, success, failure)=>{
    console.log("url",`${user}/${id}`)
    axiosInstance.get(`${user}/${id}`)
    .then(res=>success(res))
    .catch(res=>failure(res))
}
export const getsubCategoryReq=(id, success, failure)=>{
    console.log("url",`${subCategory}/${id}`)
    axiosInstance.get(`${subCategory}/${id}`)
    .then(res=>success(res))
    .catch(res=>failure(res))
}
export const getUserReq=( success, failure)=>{
    axiosInstance.get(user)
    .then(res=>success(res))
    .catch(res=>failure(res))
}

export const getBannerReq=( success, failure)=>{
    axiosInstance.get(banner)
    .then(res=>success(res))
    .catch(res=>failure(res))
}

