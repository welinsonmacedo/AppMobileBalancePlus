import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Alert } from 'react-native';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { navigate } from '../navigation/navigationService';
import { TouchableOpacity } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    // Verificar se o e-mail e a senha são válidos
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      alert('Erro', 'Por favor, insira um e-mail válido.');
      return;
    }

    if (!password || password.length < 6) {
      alert('Erro', 'Por favor, insira uma senha com pelo menos 6 caracteres.');
      return;
    }

    try {
      const auth = getAuth();
      await signInWithEmailAndPassword(auth, email.trim(), password.trim());
      console.log('Login bem-sucedido');
      alert('Login bem-sucedido', 'Você foi autenticado com sucesso.')
      Alert.alert('Login bem-sucedido', 'Você foi autenticado com sucesso.');
      navigate('Home');
    } catch (error) {
      console.error('Erro no login:', error);
      alert('Senha ou email Invalidos')
      Alert.alert('Senha ou email Invalidos');
    }}

  return (
    <View style={styles.container}>
      <Text>{Alert.alert}</Text>
      <Text style={styles.title}>Balance+</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
        keyboardType="email-address"
        autoCapitalize="none"
        selectionColor="transparent"
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
        autoCapitalize="none"
        selectionColor="transparent"
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, styles.registerButton]}
        onPress={() => navigate('RegisterUser')}
      >
        <Text style={styles.buttonText}>Registrar-se</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'rgba(92, 2, 80, 0.75)',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff',
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#fff',
    borderBottomWidth: 2,
    marginBottom: 20,
    paddingHorizontal: 10,
    width: '80%',
    fontSize: 16,
    color: '#fff',
  },
  button: {
    backgroundColor: '#fff',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 5,
    alignItems: 'center',
    width: '80%',
    marginTop: 10,
  },
  buttonText: {
    color: 'rgba(92, 2, 80, 0.75)',
    fontSize: 16,
    fontWeight: 'bold',
  },
  registerButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.75)',
  },
});

export default LoginScreen;
