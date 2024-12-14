import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { navigate } from '../navigation/navigationService';

const UserProfile = ({ navigation }) => {
  const [user, setUser] = useState(null);

  // Observar as mudanças de estado de autenticação
  useEffect(() => {
    const auth = getAuth();
    const db = getFirestore();
    
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        // Usuário está logado, buscar dados do Firestore
        setUser({ ...currentUser, loading: true });

        try {
          const userRef = doc(db, 'users', currentUser.uid);
          const userDoc = await getDoc(userRef);
          if (userDoc.exists()) {
            const userData = userDoc.data();
            setUser({ ...currentUser, ...userData, loading: false });
          } else {
            setUser({ ...currentUser, name: 'Não informado', loading: false });
          }
        } catch (error) {
          console.error('Erro ao buscar dados do usuário:', error);
          setUser({ ...currentUser, name: 'Erro ao carregar', loading: false });
        }
      } else {
        // Usuário não está logado, redireciona para a tela de login
        navigate('LoginScreen');
      }
    });

    return () => unsubscribe(); // Limpar o observador ao desmontar o componente
  }, []);

  const handleLogout = async () => {
    try {
      const auth = getAuth();
      await signOut(auth);
      Alert.alert('Logout', 'Você foi desconectado com sucesso.');
      navigate('Login');
    } catch (error) {
      console.error('Erro ao fazer logout:', error);
      Alert.alert('Erro', 'Não foi possível fazer logout. Tente novamente.');
    }
  };

  return (
    <View style={styles.container}>
      {user && !user.loading ? (
        <View style={styles.userInfoContainer}>
          <Text style={styles.title}>Perfil do Usuário</Text>
          <Text style={styles.label}>Nome:</Text>
          <Text style={styles.value}>{user.name || 'Não informado'}</Text>
          <Text style={styles.label}>Email:</Text>
          <Text style={styles.value}>{user.email}</Text>
          <Text style={styles.label}>ID do Usuário:</Text>
          <Text style={styles.value}>{user.uid}</Text>
          <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
            <Text style={styles.logoutButtonText}>Sair</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <Text style={styles.loadingText}>Carregando...</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(92, 2, 80, 0.75)',
    padding: 20,
  },
  userInfoContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '90%',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'rgba(92, 2, 80, 0.75)',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'rgba(92, 2, 80, 0.75)',
    marginTop: 10,
  },
  value: {
    fontSize: 16,
    color: '#333',
  },
  loadingText: {
    fontSize: 16,
    color: '#fff',
  },
  logoutButton: {
    backgroundColor: 'rgba(92, 2, 80, 0.75)',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 5,
    marginTop: 20,
  },
  logoutButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default UserProfile;
