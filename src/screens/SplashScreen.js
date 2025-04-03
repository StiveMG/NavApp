import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import colors from '../constants/colors';

export const SplashScreen = () => {
  const navigation = useNavigation();
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();

    const timer = setTimeout(() => {
      navigation.replace('Register');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <LinearGradient colors={[colors.principal, colors.principalBlueGreen]} style={styles.container}>
      <Animated.Text style={[styles.text, { opacity: fadeAnim }]}>Bienvenido a la App 🚀</Animated.Text>
      <Animated.Text style={[styles.subtext, { opacity: fadeAnim }]}>Cargando...</Animated.Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: colors.blanco,
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtext: {
    color: colors.variantep3,
    fontSize: 18,
  },
});