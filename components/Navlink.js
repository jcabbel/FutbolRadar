import React from 'react';
import { Image, TouchableOpacity, StyleSheet, Text, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Navlink = ({ href, text, logo }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    if (href.startsWith('http')) {
      Linking.openURL(href);
    } else {
      navigation.navigate(href);
    }
  };

  return (
    <TouchableOpacity style={styles.linkContainer} onPress={handlePress}>
      {logo ? (
        <Image source={logo} style={styles.logo} />
      ) : (
        <Text style={styles.navlinkText}>{text}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  linkContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
    alignItems: 'center',
  },
  navlinkText: {
    fontSize: 16,
    color: '#25a519',
    fontWeight: 'bold',
  },
  logo: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
});

export default Navlink;
