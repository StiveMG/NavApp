import React from "react";
import { View, Text, StyleSheet, Image } from 'react-native'

export const TopProducts = () => {
    return (
        <View style = {styles.container}>
            <Text>Lo mejor de lo mejor</Text>
            <Text>A solo un clic</Text>
            <Image source={require('./../../assets/topproducts.png')} styles = {styles.productview}></Image>
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
    productview: {
        height: 600,
        width: 600,
        resizeMode: 'contain',
        alignItems: 'center',
        justifyContent: 'center',
      },
  });