import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { auth, db } from '../services/FireBaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const RegisterUserScreen = ({ route,navigation }) => {
  const [name, setName] = useState(route.params?.name || '');
  const [email, setEmail] = useState(route.params?.email || '');
  const [password, setPassword] = useState(route.params?.password || '');
  const [termsAccepted, setTermsAccepted] = useState(route.params?.termsAccepted || false);
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const togglePasswordVisibility = () => {
    setSecureTextEntry(!secureTextEntry);
  };
  const handleTermsOfUse = () => {
    navigation.navigate('TermOfUse', {
      name,
      email,
      password,
      termsAccepted,
    });
  };
  const handleRegister = async () => {
    if (!name || !email || !password) {
      Alert.alert('Erro', 'Preencha todos os campos!');
      return;
    }

    if (!termsAccepted) {
      Alert.alert('Erro', 'Você deve aceitar os termos de uso para continuar.');
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const userId = userCredential.user.uid;

      await setDoc(doc(db, 'users', userId), {
        name,
        email,
      });

      Alert.alert('Sucesso', 'Cadastro realizado com sucesso!');
      navigation.navigate('LoginScreen');
    } catch (error) {
      Alert.alert('Erro', 'Erro ao realizar cadastro: ' + error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        placeholderTextColor="#ccc"
        onChangeText={setName}
        value={name}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#ccc"
        onChangeText={setEmail}
        value={email}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <View style={styles.passwordContainer}>
        <TextInput
          style={[styles.input, styles.passwordInput]}
          placeholder="Senha"
          placeholderTextColor="#ccc"
          secureTextEntry={secureTextEntry}
          onChangeText={setPassword}
          value={password}
        />
        <TouchableOpacity onPress={togglePasswordVisibility} style={styles.eyeIcon}>
          <MaterialCommunityIcons
            name={secureTextEntry ? 'eye-off' : 'eye'}
            size={24}
            color="#ccc"
          />
        </TouchableOpacity>
      </View>
      <View style={styles.termsContainer}>
        <TouchableOpacity onPress={() => setTermsAccepted(!termsAccepted)}>
          <MaterialCommunityIcons
            name={termsAccepted ? 'checkbox-marked' : 'checkbox-blank-outline'}
            size={24}
            color="#fff"
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleTermsOfUse}>
        <Text style={styles.termsText}>Eu li e aceito os termos de uso</Text>
      </TouchableOpacity>
       
       
      </View>
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Cadastrar</Text>
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
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
    marginBottom: 20,
  },
  passwordInput: {
    flex: 1,
  },
  eyeIcon: {
    marginLeft: 10,
  },
  termsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  termsText: {
    marginLeft: 10,
    color: '#fff',
  },
  button: {
    backgroundColor: '#fff',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 5,
    alignItems: 'center',
    width: '80%',
  },
  buttonText: {
    color: 'rgba(92, 2, 80, 0.75)',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default RegisterUserScreen;
