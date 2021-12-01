import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import 'react-native-gesture-handler'
import TabContainer from './navigation/TabContainer'
import DrawerNav from './navigation/DrawerNav'

export default function App() {
  return (
    <NavigationContainer>
      <TabContainer />
    </NavigationContainer>
    
  )
}
