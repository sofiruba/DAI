import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from '../screens/login';
import Home from '../screens/home';
import Detalle from '../screens/detalle';
import Menu from '../screens/menu';
const Stack = createNativeStackNavigator();
export default function Main() {
  return (
    <NavigationContainer  >
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Detalle" component={Detalle} options={{ headerShown: false }} initialParams={{ plato: {} }} />
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name='Menu' component={Menu} options={{ headerShown: false }} initialParams={{ menu: [] }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}