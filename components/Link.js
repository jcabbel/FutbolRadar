//components/Link.js
import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Navlink = ({ href, text }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate(href)}>
      <Text style={styles.navlinkText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  navlinkText: {
    fontSize: 18,
    color: '#007bff',
  },
});

export default Navlink;
