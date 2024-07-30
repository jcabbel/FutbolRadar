import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import Navbar from '../components/Navbar';
import LoadingOverlay from '../components/LoadingOverlay';
import styles from '../styles/ContactScreenStyles';

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

export default ContactScreen;
