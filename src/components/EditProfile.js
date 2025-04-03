import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import colors from '../constants/colors';
import { useAuth } from '../context/AuthContext';

const EditProfile = ({ navigation }) => {
    const { user } = useAuth();
    const [name, setName] = useState(user?.displayName || '');
    const [email, setEmail] = useState(user?.email || '');
    //Esto aun no esta en uso

    return (
        <LinearGradient colors={[colors.principal, colors.principalBlueGreen]} style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <Text style={styles.header}>Editar Perfil</Text>
                <Image source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/7XQpDGoifS/mhn1ys24.png" }} style={styles.profileImage} />
                <TextInput
                    style={styles.input}
                    placeholder='Nombre'
                    placeholderTextColor={colors.variante5}
                    value={name}
                    onChangeText={setName}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Correo Electrónico'
                    placeholderTextColor={colors.variante5}
                    value={email}
                    onChangeText={setEmail}
                    keyboardType='email-address'
                />
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Guardar Cambios</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
                    <Text style={styles.cancelButtonText}>Cancelar</Text>
                </TouchableOpacity>
            </ScrollView>
        </LinearGradient>
    );
};

export default EditProfile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    scrollContainer: {
        alignItems: 'center',
        paddingVertical: 20,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        color: colors.blanco,
        marginBottom: 20,
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 20,
    },
    input: {
        width: '100%',
        backgroundColor: colors.blanco,
        padding: 10,
        borderRadius: 8,
        marginBottom: 15,
        fontSize: 16,
        color: colors.principalPrussianBlue,
    },
    button: {
        backgroundColor: colors.principalPrussianBlue,
        padding: 12,
        borderRadius: 8,
        alignItems: 'center',
        marginBottom: 10,
        width: '100%',
    },
    buttonText: {
        color: colors.blanco,
        fontSize: 16,
        fontWeight: 'bold',
    },
    cancelButton: {
        backgroundColor: colors.variante5,
        padding: 12,
        borderRadius: 8,
        alignItems: 'center',
        width: '100%',
    },
    cancelButtonText: {
        color: colors.blanco,
        fontSize: 16,
        fontWeight: 'bold',
    },
});