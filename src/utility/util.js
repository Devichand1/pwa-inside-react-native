import { Alert} from 'react-native'
import NetInfo from '@react-native-community/netinfo';
export async function getNetInfo() {
    return NetInfo.fetch().then((state) => {
      return state.isConnected;
    });
  }

  export function showNoInternetDialog() {
    Alert.alert(
      Strings.NO_INTERNET,
      Strings.NO_INTERNET_MESSAGE,
      [
        {
          text: 'Settings',
          onPress: () => {
            openSettings();
          },
        },
        {
          text: 'OK',
          onPress: () => {},
        },
      ],
      {cancelable: true},
    );
  }