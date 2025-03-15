import React,{use, useEffect} from 'react'
import { View, Text, StyleSheet, Image} from 'react-native'
import { useNavigation } from '@react-navigation/native'

export const SplashScreen = () => {
  const navegation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(()=>{
      navegation.replace('MainTabs')},8000)
    return ()=> clearTimeout(timer)
  },[navegation])

  return (
     <View style ={styles.container}>
        <Text>Solo unos segundos</Text>
        <Image source={require('./../../assets/splash.jpg')} style= {styles.logo}></Image>
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

  logo: {
    height: 200,
    width: 200,
    resizeMode: 'contain',
    alignItems: 'center',
    justifyContent: 'center',
  }
});