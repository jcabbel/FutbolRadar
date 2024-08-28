//screens/LoginScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import styles from '../styles/LoginScreenStyles';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        navigation.replace('Home');
      })
      .catch((error) => {
        console.error('Error al iniciar sesión:', error.message);
      });
  };

  const handleGuestLogin = () => {
    navigation.replace('Home');
  };

  const handleRegisterRedirect = () => {
    navigation.navigate('Register');
  };

  return (
    <ImageBackground
      source={require('../assets/stand.jpg')}
      style={styles.backgroundImage}
    >
    <View style={styles.overlay} />
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <View style={styles.logoContainer}>
            <Image source={require('../assets/logo.png')} style={styles.logo} />
        </View>
        <TextInput
          style={styles.input}
          placeholder="Correo Electrónico"
          placeholderTextColor="#999"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          placeholderTextColor="#999"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleLogin}>
          <Text style={styles.buttonText}>Iniciar Sesión</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleRegisterRedirect}>
          <Text style={styles.registerLink}>¿No tienes cuenta? Regístrate aquí</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.guestContainer}>
        <TouchableOpacity style={styles.guestButton} onPress={handleGuestLogin}>
          <Text style={styles.buttonText}>Entrar como Invitado</Text>
        </TouchableOpacity>
        <Text style={styles.text}>Solo verás los partidos de Primera División</Text>
      </View>
    </View>
    </ImageBackground>  
  );
};

export default LoginScreen;
