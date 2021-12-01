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
  innerText: {
    fontSize: 16,
    color: 'gray',
    textAlign: 'center',
  },
})
export default function HomeScreen({navigation}) {
  return (
    <>
      <View style={styles.center}>
        <Text style={styles.title}>Home screen</Text>
        <Text style={styles.innerText}>請點擊漢堡icon{'\n'}並前往data頁面查看串接資料</Text>
      </View>
    </>
  )
}
