// components/LoadingOverlay.js
import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Dimensions } from 'react-native';

const LoadingOverlay = () => {
  const { width, height } = Dimensions.get('window');
  
  return (
    <View style={[styles.overlay, { width, height }]}>
      <ActivityIndicator size="large" color="#ffffff" />
      <Text style={styles.loadingText}>Cargando...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 2,
  },
  loadingText: {
    color: '#ffffff',
    fontSize: 18,
    marginTop: 10,
  },
});

export default LoadingOverlay;
