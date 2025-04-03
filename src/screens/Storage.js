import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import colors from '../constants/colors';
import { Ionicons } from '@expo/vector-icons';

const sampleInventory = [
  { id: '1', name: 'Bottle X Dark Side', category: 'Hogar', store: 'Tech Store', image: require('../../assets/bottle.jpeg') },
  { id: '2', name: 'Clock Pro', category: 'Tecnología', store: 'Fashion Hub', image: require('../../assets/clock.jpeg') },
  { id: '3', name: 'Mouse Smart Pro', category: 'Tecnología', store: 'Home Essentials', image: require('../../assets/mouse.jpeg') },
];

export const Storage = () => {
    const [inventory, setInventory] = useState(sampleInventory);

    return (
        <LinearGradient colors={[colors.principal, colors.principalBlueGreen]} style={styles.container}>
            <Text style={styles.title}>Gestión de Inventario 📦</Text>
            
            <FlatList 
                data={inventory}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <View style={styles.inventoryCard}>
                        <Image source={item.image} style={styles.itemImage} />
                        <View style={styles.itemInfo}>
                            <Text style={styles.itemName}>{item.name}</Text>
                            <Text style={styles.itemStock}>Stock: {item.stock}</Text>
                        </View>
                        <TouchableOpacity style={styles.editButton}>
                            <Ionicons name='pencil' size={20} color={colors.blanco} />
                        </TouchableOpacity>
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
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: colors.blanco,
        textAlign: 'center',
        marginBottom: 20,
    },
    inventoryCard: {
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
    itemImage: {
        width: 60,
        height: 60,
        borderRadius: 10,
        marginRight: 15,
    },
    itemInfo: {
        flex: 1,
    },
    itemName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: colors.principalPrussianBlue,
    },
    itemStock: {
        fontSize: 14,
        color: colors.principalBlueGreen,
    },
    editButton: {
        backgroundColor: colors.principalPrussianBlue,
        padding: 8,
        borderRadius: 8,
    },
});