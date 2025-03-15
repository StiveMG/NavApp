import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export const Storage = () => {
    return (
        <View style = {styles.container}>
            <Text>Inventario</Text>
            <Image source={require('./../../assets/inventario.png')} style = {styles.storageview}></Image>
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
    storageview: {
      height: 600,
      width: 600,
      resizeMode: 'contain',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });