import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../screens/home';
import Contactos from '../screens/contactos';
import Clima from '../screens/horaytemperatura';
import CambioImagen from '../screens/cambioimagen';
import { FondoProvider } from '../context/fondocontext';
import { useState } from 'react';

export default function Main() {
  const Stack = createNativeStackNavigator();
  const [fondo, setFondo] = React.useState('https://64.media.tumblr.com/021d1962d8614b29860472de90940707/tumblr_p8ux6yfgCM1uadsz3o3_1280.jpg');

  return (
    <FondoProvider value={[ fondo, setFondo ]}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Contactos" component={Contactos} options={{ headerShown: false }} />
        <Stack.Screen name="Clima" component={Clima} options={{ headerShown: false }} />
        <Stack.Screen name="CambioImagen" component={CambioImagen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
    </FondoProvider>
  )
}