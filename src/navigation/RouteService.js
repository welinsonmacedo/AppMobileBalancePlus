
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from './navigationService.js';
import RegisterUser from '../screens/RegisterUser.jsx'; 
import Password from '../screens/LoginAuth.jsx'; 
import LoginScreen from '../screens/Login.jsx';
import Home from '../screens/Home.jsx';
import TermOfUse from '../components/TermOfUse.jsx';
import UserProfile from '../screens/UserProfile.jsx';
const Stack = createStackNavigator();

const RouteService = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}  />
        <Stack.Screen name="Password" component={Password} options={{ headerShown: false }} />
        <Stack.Screen name="RegisterUser" component={RegisterUser} options={{ headerShown: false }} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="TermOfUse" component={TermOfUse} options={{ headerShown: false }} />
        <Stack.Screen name="UserProfile" component={UserProfile} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RouteService;
