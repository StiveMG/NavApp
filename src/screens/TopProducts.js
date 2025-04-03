import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TextInput, FlatList, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import colors from '../constants/colors';

const sampleProducts = [
    { id: '1', name: 'Bottle X Dark Side', category: 'Hogar', store: 'Tech Store', image: require('../../assets/bottle.jpeg') },
    { id: '2', name: 'Clock Pro', category: 'Tecnología', store: 'Fashion Hub', image: require('../../assets/clock.jpeg') },
    { id: '3', name: 'Mouse Smart Pro', category: 'Tecnología', store: 'Home Essentials', image: require('../../assets/mouse.jpeg') },
];

export const TopProducts = () => {
    const [search, setSearch] = useState('');
    const [filteredProducts, setFilteredProducts] = useState(sampleProducts);

    const handleSearch = (text) => {
        setSearch(text);
        setFilteredProducts(sampleProducts.filter(product => 
            product.name.toLowerCase().includes(text.toLowerCase()) ||
            product.category.toLowerCase().includes(text.toLowerCase())
        ));
    };

    return (
        <LinearGradient colors={[colors.principal, colors.principalBlueGreen]} style={styles.container}>
            <Text style={styles.header}>Los productos más vendidos 📢</Text>
            <TextInput 
                style={styles.searchBox}
                placeholder="Buscar por nombre o categoría"
                placeholderTextColor={colors.variante5}
                value={search}
                onChangeText={handleSearch}
            />
            <FlatList 
                data={filteredProducts}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <View style={styles.productCard}>
                        <Image source={item.image} style={styles.productImage} />
                        <View style={styles.productInfo}>
                            <Text style={styles.productName}>{item.name}</Text>
                            <Text style={styles.productCategory}>{item.category}</Text>
                            <Text style={styles.productStore}>Distribuido por: {item.store}</Text>
                        </View>
                    </View>
                )}
            />
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    header: {
        fontSize: 22,
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
    productCard: {
        flexDirection: 'row',
        backgroundColor: colors.blanco,
        borderRadius: 10,
        padding: 15,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
    },
    productImage: {
        width: 60,
        height: 60,
        borderRadius: 10,
        marginRight: 10,
    },
    productInfo: {
        flex: 1,
    },
    productName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: colors.principalPrussianBlue,
    },
    productCategory: {
        fontSize: 14,
        color: colors.principalBlueGreen,
    },
    productStore: {
        fontSize: 12,
        color: colors.variante5,
    },
});