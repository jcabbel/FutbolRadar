import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity, Dimensions, ImageBackground } from 'react-native';
import Navbar from '../components/Navbar';
import LoadingOverlay from '../components/LoadingOverlay';

const ContactScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = () => {
    setIsLoading(true);
    // Simular envío de mensaje
    setTimeout(() => {
      setIsLoading(false);
      console.log('Mensaje enviado:', { name, email, message });
    }, 2000);
  };

  return (
    <ImageBackground
      source={require('../assets/football-ground.jpg')}
      style={styles.backgroundImage}
      imageStyle={styles.backgroundImageStyle}
    >
      <View style={styles.overlay} />
      <View style={styles.container}>
        <View style={styles.navbarWrapper}>
          <Navbar />
        </View>
        <View style={styles.contentWrapper}>
          <Text style={styles.title}>Contacto</Text>
          <View style={styles.formContainer}>
            <TextInput
              style={styles.input}
              placeholder="Nombre"
              placeholderTextColor="#ccc"
              value={name}
              onChangeText={setName}
            />
            <TextInput
              style={styles.input}
              placeholder="Correo Electrónico"
              placeholderTextColor="#ccc"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
            />
            <TextInput
              style={styles.textArea}
              placeholder="Mensaje"
              placeholderTextColor="#ccc"
              value={message}
              onChangeText={setMessage}
              multiline
              numberOfLines={4}
            />
            <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
              <Text style={styles.buttonText}>ENVIAR</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.emailContainer}>
            <Text style={styles.emailLabel}>O si lo prefieres:</Text>
            <Text style={styles.emailText}>{email || 'j.cabellosbel@gmail.com'}</Text>
          </View>
        </View>
        {isLoading && <LoadingOverlay />}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  backgroundImageStyle: {
    opacity: 0.5,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  navbarWrapper: {
    width: '100%',
    height: 70,
    zIndex: 1,
    elevation: 1,
    position: 'absolute',
    top: 0,
    left: 0,
  },
  contentWrapper: {
    flex: 1,
    marginTop: 70,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#faf9f7',
    marginBottom: 20,
  },
  formContainer: {
    width: '80%',
    padding: 20,
    backgroundColor: 'transparent',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  input: {
    width: '100%',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderColor: '#ccc',
    borderWidth: 1,
    color: '#000',
  },
  textArea: {
    width: '100%',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderColor: '#ccc',
    borderWidth: 1,
    height: 100,
    textAlignVertical: 'top',
    color: '#000',
  },
  sendButton: {
    width: '100%',
    padding: 15,
    borderRadius: 5,
    backgroundColor: '#25a519',
    alignItems: 'center',
  },
  buttonText: {
    color: '#faf9f7',
    fontSize: 18,
    fontWeight: 'bold',
  },
  emailContainer: {
    width: '20%',
    marginTop: 20,
    padding: 20,
    backgroundColor: 'rgba(240, 240, 240, 0.4)',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
    alignItems: 'center',
  },
  emailLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  emailText: {
    fontSize: 16,
  },
});

export default ContactScreen;
