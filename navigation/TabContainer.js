import React from 'react'
import {Text, View, StyleSheet} from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'

// Screens
import HomeScreen from './screens/HomeScreen'
import DetailsScreen from './screens/DetailsScreen'
import SettingsScreen from './screens/SettingsScreen'
import DrawerNav from './DrawerNav'

import {MainStackNavigator} from './StackContainer'

//Screen names
const homeName = 'Home'
const detailsName = 'Details'
const settingsName = 'Settings'

const Tab = createBottomTabNavigator()

const styles = StyleSheet.create({
  menu: {
    position: 'absolute',
    height: 100,
    width: 50,
  },
})

export default function TabContainer() {
  return (
    <Tab.Navigator
      initialRouteName={homeName}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName
          let routeName = route.name

          if (routeName === homeName) {
            iconName = focused ? 'home' : 'home-outline'
          } else if (routeName === detailsName) {
            iconName = focused ? 'list' : 'list-outline'
          } else if (routeName === settingsName) {
            iconName = focused ? 'settings' : 'settings-outline'
          }

          return <Ionicons name={iconName} size={size} color={color} />
        },
        tabBarStyle: {
          height: 60,
          paddingTop: 10,
          paddingBottom: 10,
          inactiveTintColor: 'grey',
        },
        headerShown: false,
      })}>
      <Tab.Screen name={homeName} component={MainStackNavigator} />
      <Tab.Screen name={detailsName} component={DetailsScreen} />
      <Tab.Screen name={settingsName} component={SettingsScreen} />
    </Tab.Navigator>
  )
}
