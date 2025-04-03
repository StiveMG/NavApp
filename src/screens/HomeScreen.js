import React from 'react';
import { SafeAreaView, View, StyleSheet, ImageBackground, Image, ScrollView, Text, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import colors from '../constants/colors';

const { width, height } = Dimensions.get('window');

export const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient colors={[colors.principal, colors.principalBlueGreen]} style={styles.gradient}>
        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          <View style={styles.logoContainer}>
            <Image source={require('../../assets/HomeLogo.jpeg')} style={styles.logoContainer} />
          </View>
          <Text style={styles.welcomeText}>¡Bienvenido a la revolución del comercio digital!</Text>
          <Text style={styles.slogan}>"Crea tu tienda, ofrece tus productos y haz crecer tu negocio desde cualquier lugar"</Text>
          <View style={styles.newsContainer}>
            <Text style={styles.newsTitle}>📰 Últimas noticias</Text>
            <Text style={styles.newsText}>- Nuevas funciones para mejorar tu tienda virtual.</Text>
            <Text style={styles.newsText}>- Descubre cómo aumentar tus ventas en línea.</Text>
          </View>
          <View style={styles.featureContainer}>
            <Text style={styles.featureTitle}>🚀 ¿Por qué elegirnos?</Text>
            <Text style={styles.featureText}>✅ Plataforma intuitiva y fácil de usar.</Text>
            <Text style={styles.featureText}>✅ Personaliza tu tienda como quieras.</Text>
            <Text style={styles.featureText}>✅ Conéctate con miles de clientes potenciales.</Text>
          </View>
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 50,
  },
  logoContainer: {
    width: 150,
    height: 150,
    backgroundColor: colors.blanco,
    borderRadius: 75,
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 26,
    fontWeight: 'bold',
    color: colors.blanco,
    textAlign: 'center',
    marginBottom: 10,
  },
  slogan: {
    fontSize: 18,
    fontStyle: 'italic',
    color: colors.variantep3,
    textAlign: 'center',
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  newsContainer: {
    backgroundColor: colors.blanco,
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    width: '85%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  newsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: colors.principalPrussianBlue,
  },
  newsText: {
    fontSize: 16,
    color: colors.principalBlueGreen,
  },
  featureContainer: {
    backgroundColor: colors.blanco,
    padding: 15,
    borderRadius: 10,
    width: '85%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  featureTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: colors.principalPrussianBlue,
  },
  featureText: {
    fontSize: 16,
    color: colors.principalBlueGreen,
  },
});