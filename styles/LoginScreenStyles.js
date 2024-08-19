import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#faf9f7',
  },
  logoContainer: {
    marginTop: 10,
    marginBottom: 30,
  },
  logo: {
    width: 200,
    height: 100,
    resizeMode: 'contain',
    background: '#25a519',
  },
  formContainer: {
    width: '25%',
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
    alignItems: 'center',
  },
  input: {
    width: '100%',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderColor: '#ccc',
    borderWidth: 1,
    color: '#000',
  },
  sendButton: {
    width: '100%',
    padding: 15,
    borderRadius: 5,
    backgroundColor: '#25a519',  // Fondo del botón verde
    alignItems: 'center',
    marginTop: 10,
  },
  guestContainer: {
    width: '25%',
    padding: 15,
    marginTop: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 10,
    alignItems: 'center',
  },
  guestButton: {
    padding: 15,
    borderRadius: 5,
    backgroundColor: '#CCCCCC', 
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {
    color: '#faf9f7',
    fontSize: 18,
    fontWeight: 'bold',
  },
  registerLink: {
    color: '#25a519',
    fontSize: 16,
    marginTop: 10,
    textAlign: 'center',
  },
});
