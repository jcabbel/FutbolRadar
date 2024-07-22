import React from 'react';
import { View, StyleSheet } from 'react-native';
import Logo from './Logo';
import Navmenu from './Navmenu';

const Navbar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoWrapper}>
        <Logo size={40} />
      </View>
      <View style={styles.navmenuContainer}>
        <Navmenu />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#25a519',
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#d1e0e0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  logoWrapper: {
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
  navmenuContainer: {
    flex: 2,
    alignItems: 'flex-end',
  },
});

export default Navbar;
