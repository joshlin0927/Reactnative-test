import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'

// Screens
import DrawerNav from './DrawerNav'

const Stack = createStackNavigator()

const MainStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="DrawerNav" component={DrawerNav} />
    </Stack.Navigator>
  )
}


export {MainStackNavigator}