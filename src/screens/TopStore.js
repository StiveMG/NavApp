import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

export const TopStore = () => {
  return (
    <View style ={styles.container}>
         <Text>Date el mejor gusto</Text>
         <Text>con las tienda más Top 🛍️</Text>
         <Image source={require('./../../assets/topstore.png')} style = {styles.storeview}></Image>
    </View>   
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  storeview: {
    height: 400,
    width: 400,
    resizeMode: 'contain',
    alignItems: 'center',
    justifyContent: 'center',
  },
});