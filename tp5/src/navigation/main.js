import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from '../screens/login';
import Home from '../screens/home';
import Detalle from '../screens/detalle';
import Buscador from '../screens/buscador';
const Stack = createNativeStackNavigator();
export default function Main() {
  return (
    <NavigationContainer  >
      <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="Buscador" component={Buscador} options={{ headerShown: false }} />
      <Stack.Screen name="Detalle" component={Detalle} options={{ headerShown: false }} />
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}