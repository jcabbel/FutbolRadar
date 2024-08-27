import React from 'react';
import { View, StyleSheet } from 'react-native';
import Navlink from './Navlink';
import gitHubLogo from '../assets/github-logo.png';

const Navmenu = () => {
  return (
    <View style={styles.navmenu}>
      <Navlink href="https://github.com/jcabbel/FutbolRadar" logo={gitHubLogo} />      
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