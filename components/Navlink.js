import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Navlink = ({ href, text }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity 
      style={styles.linkContainer} 
      onPress={() => navigation.navigate(href)}
    >
      <Text style={styles.navlinkText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  linkContainer: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#faf9f7',
    margin: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  navlinkText: {
    fontSize: 16,
    color: '#25a519',
    fontWeight: 'bold',
  },
});

export default Navlink;
