import React from 'react';
import { View, StyleSheet } from 'react-native';
import Navlink from './Navlink';

const Navmenu = () => {
  return (
    <View style={styles.navmenu}>
      <Navlink href="Home" text="Home" />
      <Navlink href="Contact" text="Contact" />
    </View>
  );
};

const styles = StyleSheet.create({
  navmenu: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 5,
  },
});

export default Navmenu;
