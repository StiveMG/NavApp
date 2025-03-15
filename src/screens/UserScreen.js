import React from 'react'
import { View, Text, StyleSheet, Image} from 'react-native'

export const UserScreen = () => {
  return (
    <View style ={styles.container}>
        <Text>Dale un toque especial a tu tienda 🏪</Text>
        <Text>INICIA SESIÓN</Text>
        <Image source = {require('./../../assets/user.png')} style = {styles.userview}></Image>
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
  userview: {
    height: 600,
    width: 600,
    resizeMode: 'contain',
    alignItems: 'center',
    justifyContent: 'center',
  },
});