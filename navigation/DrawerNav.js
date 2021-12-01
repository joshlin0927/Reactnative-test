import React from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer'

// Screens
import HomeScreen from './screens/HomeScreen'
import DataScreen from './screens/DataScreen'

const Drawer = createDrawerNavigator()

export default function DrawerNav() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Data" component={DataScreen} />
    </Drawer.Navigator>
  )
}
