import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import colors from '../constants/colors';
import { useAuth } from '../context/AuthContext';

const UserScreen = ({ navigation }) => {
    const { user } = useAuth();

    return (
        <LinearGradient colors={[colors.principal, colors.principalBlueGreen]} style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollView}>
                <View style={styles.profileContainer}>
                    <Image source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/7XQpDGoifS/mhn1ys24.png" }} style={styles.profileImage} />
                    <Text style={styles.username}>{user?.displayName || 'Usuario'}</Text>
                </View>
                
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('EditProfile')}>
                    <Text style={styles.buttonText}>Editar perfil</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('About')}>
                    <Text style={styles.buttonText}>Acerca de</Text>
                </TouchableOpacity>
            </ScrollView>
        </LinearGradient>
    );
};

export default UserScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    scrollView: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    profileContainer: {
        alignItems: 'center',
        marginBottom: 30,
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 10,
    },
    username: {
        fontSize: 22,
        fontWeight: 'bold',
        color: colors.blanco,
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