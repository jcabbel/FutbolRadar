import React from 'react';
import { View, StyleSheet } from 'react-native';
import Navlink from './Navlink';

const Navmenu = () => {
  return (
    <View style={styles.navmenu}>
      <Navlink href="Home" text="Home" />
      <Navlink href="About" text="About" />
      <Navlink href="Contact" text="Contact" />
    </View>
  );
};

const styles = StyleSheet.create({
  navmenu: {
    flexDirection: 'row', // Dispone los enlaces en fila
    justifyContent: 'flex-end', // Alinea los enlaces a la derecha
    padding: 5, // Añade padding alrededor del contenedor
  },
});

export default Navmenu;
