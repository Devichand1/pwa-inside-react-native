import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {View, Text, StyleSheet, Pressable, Dimensions} from 'react-native';
import HomeScreen from '../screens/home';
import {PRIMARY_COLOR, SECONDARY_COLOR} from '../constant/Color';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'
import SearchScreen from '../screens/search';
import Cart from '../screens/cart';
import ProfileScreen from '../screens/Profile';

const Tabs = createBottomTabNavigator();
const width = Dimensions.get('screen').width;
export default function TabNavigator() {
  return (
    <Tabs.Navigator
      //   lazy={false}
      initialRouteName={'Cart'}
      allowFontScaling={false}
      tabBarOptions={{keyboardHidesTabBar: true}}
      tabBar={(props) => <TabBar {...props} />}>
      <Tabs.Screen
        options={{headerShown: false}}
        name="Home"
        component={HomeScreen}
      />
     
      <Tabs.Screen
        options={{headerShown: false}}
        name="Search"
        component={SearchScreen}
      />

       <Tabs.Screen
        options={{headerShown: false}}
        name="Cart"
        component={Cart}
      />  
          <Tabs.Screen
        options={{headerShown: false}}
        name="Profile"
        component={ProfileScreen}
      />
    </Tabs.Navigator>
  );
}

const TabBar = ({state, descriptors, navigation}) => {
  return (
    <View style={styles.tabContainer}>
      <View style={{flexDirection: 'row', position: 'absolute', bottom: 10}}>
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }

            {
              /* animateSlider(index); */
            }
          };
          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };
          return (
            <Pressable
              onPress={onPress}
              onLongPress={onLongPress}
              style={{flex: 1, backgroundColor: 'transparent'}}
              key={index}
              android_ripple={{
                color: PRIMARY_COLOR,
                borderless: false,
                radius: 20,
              }}>
              <TabBarMenuItem
                iconName={label.toString()}
                isCurrent={isFocused}
              />
            </Pressable>
          );
        })}
      </View>
    </View>
  );
};

const TabBarMenuItem = ({iconName, isCurrent}) => {
  return (
    <View style={styles.tabItem}>
      {TabIcons(iconName, isCurrent).icon}
      {
        isCurrent ? 
          <Text style={{color: isCurrent ? "yellow" : '#000'}}>
        {TabIcons(iconName, isCurrent).text}
      </Text>
      : null
      }
   
    </View>
  );
};
const TabIcons = (name, isCurrent) => {
  if (name === 'Home') {
    return {
      icon: (
        <AntDesign
          size={24}
          name="home"
          color={isCurrent ? "yellow" : '#FFF'}
        />
      ),
      text: 'Home',
    };
  }
 else if (name === 'Search') {
    return {
      icon: (
        <FontAwesome
          size={24}
          name="search"
          color={isCurrent ?  "yellow" : '#FFF'}
        />
      ),
      text: 'Search',
    };
  }
  if (name === 'Profile') {
    return {
      icon: (
        <Feather
          size={24}
          name="user"
          color={isCurrent ?  "yellow" : '#FFF'}
        />
      ),
      text: 'Profile',
    };
  } else {
    return {
      icon: (
        <Ionicons
          size={24}
          name="md-cart-outline"
          color={isCurrent ?  "yellow" : '#FFF'}
        />
      ),
      text: 'Cart',
    };
  }
};

const styles = StyleSheet.create({
  tabContainer: {
    backgroundColor: SECONDARY_COLOR,
    bottom: 0,
    height: 65,
    position: 'absolute',
    zIndex: 99,
    borderTopLeftRadius:20,
    borderTopRightRadius:20,
    width: width,
  },
  tabItem: {
    paddingVertical: 5,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    // marginBottom: 10,
  },
});
