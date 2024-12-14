import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

const TermOfUse = ({route, navigation}) => {
    const { name, email, password, termsAccepted } = route.params;

    const handleClose = () => {
      navigation.navigate('RegisterUser', {
        name,
        email,
        password,
        termsAccepted,
      });
    };
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Termos de Uso</Text>
      <ScrollView style={styles.scrollContainer}>
        <Text style={styles.text}>
          Bem-vindo ao nosso aplicativo. Ao utilizar nossos serviços, você concorda com os seguintes termos...
          (detalhes dos termos de uso aqui)
        </Text>
      </ScrollView>
      <TouchableOpacity style={styles.button} onPress={handleClose}>
        <Text style={styles.buttonText}>Fechar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  scrollContainer: {
    flex: 1,
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
  },
  button: {
    backgroundColor: 'rgba(92, 2, 80, 0.75)',
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default TermOfUse;