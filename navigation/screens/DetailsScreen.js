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


export default function DetailScreen() {
  return (
    <>
      <View style={styles.center}>
        <Text
          onPress={() => {
            navigation.navigate('Home')
          }}
          style={styles.title}>
          Detail screen
        </Text>
      </View>
    </>
  )
}
