//components/Logo.js
import React from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Logo = ({ size }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.link}>
      <Image
        source={require('../assets/logo.png')}
        style={{ width: size, height: size }}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  link: {
    
  }
});

export default Logo;
