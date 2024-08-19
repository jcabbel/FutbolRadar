import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5', // Fondo claro para contraste
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  formContainer: {
    width: '90%',
    maxWidth: 400,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 200,
    height: 100,
    resizeMode: 'contain',
  },
  input: {
    width: '100%',
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
    backgroundColor: '#f5f5f5',
    borderColor: '#ccc',
    borderWidth: 1,
    color: '#000',
  },
  sendButton: {
    width: '100%',
    padding: 15,
    borderRadius: 5,
    backgroundColor: '#25a519',
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#faf9f7',
    fontSize: 18,
    fontWeight: 'bold',
  },
  registerLink: {
    color: '#25a519',
    fontSize: 16,
    textAlign: 'center',
  },
});
