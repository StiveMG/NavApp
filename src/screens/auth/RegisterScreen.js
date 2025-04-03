import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, ScrollView, Image } from 'react-native';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { auth } from '../../services/firebaseConfig';
import colors from '../../constants/colors';

const RegisterScreen = () => {
    const navigation = useNavigation();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleRegister = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                updateProfile(user, { displayName: name }).then(() => {
                    navigation.navigate('Login');
                }).catch((error) => {
                    setError(true);
                    setErrorMessage(error.message);
                });
            })
            .catch((error) => {
                setError(true);
                setErrorMessage(error.message);
            });
    };

    return (
        <LinearGradient colors={[colors.principal, colors.principalBlueGreen]} style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollView}>
                <Image source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/7XQpDGoifS/mhn1ys24.png" }}
                    resizeMode="contain"
                    style={styles.image}
                />
                <View style={styles.formContainer}>
                    <Text style={styles.label}>Nombre:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='Tu Nombre'
                        placeholderTextColor={colors.variante5}
                        value={name}
                        onChangeText={setName}
                    />
                    <Text style={styles.label}>Correo:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='Tu Correo'
                        keyboardType='email-address'
                        placeholderTextColor={colors.variante5}
                        value={email}
                        onChangeText={setEmail}
                    />
                    <Text style={styles.label}>Contraseña:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='Tu Contraseña'
                        secureTextEntry
                        placeholderTextColor={colors.variante5}
                        value={password}
                        onChangeText={setPassword}
                    />
                    {error && (
                        <Text style={styles.errorMessage}>{errorMessage}</Text>
                    )}
                    <TouchableOpacity style={styles.button} onPress={handleRegister}>
                        <Text style={styles.buttonText}>Registrarse</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                        <Text style={styles.loginText}>¿Ya tienes una cuenta? Inicia sesión</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollView: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 40,
    },
    image: {
        width: 150,
        height: 150,
        marginBottom: 20,
    },
    formContainer: {
        width: '85%',
        backgroundColor: colors.blanco,
        padding: 20,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        color: colors.principalPrussianBlue,
        marginBottom: 5,
    },
    input: {
        height: 45,
        borderColor: colors.variante5,
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
        marginBottom: 15,
        color: colors.principalPrussianBlue,
    },
    button: {
        backgroundColor: colors.principalSelectiveYellow,
        paddingVertical: 12,
        borderRadius: 8,
        alignItems: 'center',
        marginBottom: 10,
    },
    buttonText: {
        color: colors.principalPrussianBlue,
        fontSize: 16,
        fontWeight: 'bold',
    },
    loginText: {
        color: colors.principal,
        textAlign: 'center',
        fontSize: 14,
        marginTop: 10,
    },
    errorMessage: {
        color: colors.error,
        marginBottom: 10,
        textAlign: 'center',
    }
});

export default RegisterScreen;