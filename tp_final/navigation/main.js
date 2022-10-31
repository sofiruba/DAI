import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../components/home'
import Contactos from '../screens/contactos';
import Clima from '../screens/horaytemperatura';
import CambioImagen from '../screens/cambioimagen';
const Stack = createNativeStackNavigator();
export default function Main() {
  return (
    <NavigationContainer  >
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Contactos" component={Contactos} options={{ headerShown: false }} />
        <Stack.Screen name="Clima" component={Clima} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={CambioImagen} options={{ headerShown: false }} />

      </Stack.Navigator>
    </NavigationContainer>
  )
}