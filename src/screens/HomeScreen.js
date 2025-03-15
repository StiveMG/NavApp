import React from 'react'
import { View, Text, StyleSheet, Image} from 'react-native'

export const HomeScreen = () => {
  return (
    <View style ={styles.container}>
         <Text>Bienvenido!! 😎</Text>
         <Image source={require('./../../assets/home.jpg')} style= {styles.homeview}></Image>
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
  homeview: {
    height: 600,
    width: 600,
    resizeMode: 'contain',
    alignItems: 'center',
    justifyContent: 'center',
  },
});