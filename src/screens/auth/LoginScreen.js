import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, ScrollView, Image } from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { auth } from '../../services/firebaseConfig';
import colors from '../../constants/colors';

const LoginScreen = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleLogin = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                setError(false);
                setErrorMessage('');
                navigation.navigate('MainTabs');
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
                    {error && <Text style={styles.errorMessage}>{errorMessage}</Text>}
                    <TouchableOpacity style={styles.button} onPress={handleLogin}>
                        <Text style={styles.buttonText}>Iniciar Sesión</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                        <Text style={styles.registerText}>¿No tienes una cuenta? Regístrate</Text>
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
    registerText: {
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

export default LoginScreen;