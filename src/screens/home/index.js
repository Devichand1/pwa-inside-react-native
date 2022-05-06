import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import {

  PRIMARY_COLOR,
  SECONDARY_COLOR,
} from '../../constant/Color';

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text>React Native app</Text>
      </View>
      <View
        style={{
          padding: 16,
        }}>
        <View
          style={{
            backgroundColor: PRIMARY_COLOR,
            padding: 15,
            borderRadius: 10,
            margin: 5,
          }}>
          <Text>Hii, User</Text>
          <Text>Good Morning</Text>
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate('webview')}
          style={{
            flexDirection: 'row',
            backgroundColor: '#000',
            padding: 20,
            borderRadius: 8,
          }}>
          <Text>launch PWA</Text>
        </TouchableOpacity>
      </View>
      <View></View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: SECONDARY_COLOR,
  },
  header: {
    borderBottomWidth: 1,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor:"#444",
    backgroundColor: 'gray',
  },
});
