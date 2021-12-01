import React, {useEffect, useState} from 'react'
import {ActivityIndicator, View, Text, FlatList, StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cate: {
    flexDirection: 'row',
    backgroundColor: 'wheat',
    height: 50,
    width: 300,
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 15,
  },
  card: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'wheat',
    height: 50,
    width: 300,
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 10,
  },
})

export default function DataScreen() {
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState([])
  useEffect(() => {
    fetch('https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8')
      .then(r => r.json())
      .then(obj => {
        setData(obj)
        setTimeout(() => {
          setIsLoading(false)
        }, 1000)
      })
      .catch(error => {
        console.error(error)
      })
  }, [])

  const Item = ({city, name}) => (
    <View style={styles.card}>
      <Text>{city}</Text>
      <Text>{name}</Text>
    </View>
  )
  const renderItem = ({item}) => <Item city={item.city} name={item.name} />

  return (
    <>
      {isLoading ? (
        <ActivityIndicator style={styles.center} />
      ) : (
        <View style={styles.center}>
          <View style={styles.cate}>
            <Text>City Name</Text>
            <Text>Full Name</Text>
          </View>
          <FlatList data={data} renderItem={renderItem} />
        </View>
      )}
    </>
  )
}
