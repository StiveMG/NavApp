import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import colors from '../constants/colors';
import { Ionicons } from '@expo/vector-icons';

const About = ({ navigation }) => {
  return (
    <LinearGradient colors={[colors.principal, colors.principalBlueGreen]} style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.title}>¡Gracias por usar nuestra App! 🚀</Text>
        
        <Text style={styles.subtitle}>Información de la aplicación</Text>
        <Text style={styles.text}>- Nombre: NavApp</Text>
        <Text style={styles.text}>- Versión: 1.0</Text>
        <Text style={styles.text}>- Lanzamiento: 2025</Text>
        <Text style={styles.text}>- Descripción: Una app diseñada para mejorar tu experiencia de compra, venta y administración de productos.</Text>
        
        <Text style={styles.subtitle}>Sobre el desarrollador</Text>
        <Text style={styles.text}>👨‍💻 Estiven Medina Galvis - EstmedinaDev</Text>
        <Text style={styles.text}>Apasionado por la tecnología y la creación de experiencias digitales intuitivas y eficientes.</Text>
        
        <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
          <Ionicons name='arrow-back' size={24} color={colors.error} />
          <Text style={styles.buttonText}>Regresar</Text>
        </TouchableOpacity>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  contentContainer: {
    alignItems: 'center',
    paddingBottom: 30,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: colors.blanco,
    textAlign: 'center',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.variantep3,
    marginTop: 15,
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    color: colors.blanco,
    textAlign: 'center',
    marginBottom: 8,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.variantep3,
    padding: 10,
    borderRadius: 8,
    marginTop: 20,
  },
  button: {
          width: '100%',
          backgroundColor: colors.blanco,
          padding: 15,
          borderRadius: 10,
          alignItems: 'center',
          marginBottom: 15,
          shadowColor: '#000',
          shadowOpacity: 0.2,
          shadowRadius: 5,
          shadowOffset: { width: 0, height: 2 },
          elevation: 5,
      },
  buttonText: {
          fontSize: 16,
          fontWeight: 'bold',
          color: colors.principalPrussianBlue,
      },
});

export default About;