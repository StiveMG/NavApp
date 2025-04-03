import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, FlatList, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import colors from '../constants/colors';

const sampleStores = [
  { id: '1', name: 'Tech World', category: 'Electrónica', image: require('../../assets/favicon.png') },
  { id: '2', name: 'Moda Chic', category: 'Ropa', image: require('../../assets/WallApp.jpeg') },
  { id: '3', name: 'Hogar y Más', category: 'Muebles', image: require('../../assets/HomeWelcome.png') },
];

export const TopStore = () => {
  const [search, setSearch] = useState('');
  const [filteredStores, setFilteredStores] = useState(sampleStores);

  const handleSearch = (text) => {
    setSearch(text);
    setFilteredStores(
      sampleStores.filter(
        (store) =>
          store.name.toLowerCase().includes(text.toLowerCase()) ||
          store.category.toLowerCase().includes(text.toLowerCase())
      )
    );
  };

  return (
    <LinearGradient colors={[colors.principal, colors.principalBlueGreen]} style={styles.container}>
      <Text style={styles.title}>Explora las Tiendas Más Top 🛍️</Text>

      <TextInput 
        style={styles.searchBox}
        placeholder="Buscar por nombre o categoría"
        placeholderTextColor={colors.variante5}
        value={search}
        onChangeText={handleSearch}
      />

      <FlatList
        data={filteredStores}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.storeCard}>
            <Image source={item.image} style={styles.storeImage} />
            <View>
              <Text style={styles.storeName}>{item.name}</Text>
              <Text style={styles.storeCategory}>{item.category}</Text>
            </View>
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.listContainer}
      />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.blanco,
    textAlign: 'center',
    marginBottom: 10,
  },
  searchBox: {
    backgroundColor: colors.blanco,
    padding: 10,
    borderRadius: 8,
    marginBottom: 15,
    fontSize: 16,
    color: colors.principalPrussianBlue,
  },
  listContainer: {
    paddingBottom: 20,
  },
  storeCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.blanco,
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 5,
  },
  storeImage: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginRight: 15,
  },
  storeName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.principalPrussianBlue,
  },
  storeCategory: {
    fontSize: 14,
    color: colors.principalBlueGreen,
  },
});