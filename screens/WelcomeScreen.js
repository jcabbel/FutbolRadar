//screens/WelcomeScreen.js
import React, { useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/WelcomeScreenStyles';

const WelcomeScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Home');
    }, 500);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.logo} />
      <Text style={styles.welcomeText}>FutbolRadar</Text>
    </View>
  );
};

export default WelcomeScreen;
