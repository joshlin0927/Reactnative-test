import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: 'black',
  },
})


export default function SettingScreen() {
  return (
    <>
      <View style={styles.center}>
        <Text
          onPress={() => {
            navigation.navigate('Home')
          }}
          style={styles.title}>
          Setting screen
        </Text>
      </View>
    </>
  )
}
