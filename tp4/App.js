import { StatusBar } from 'expo-status-bar';
import React,{ useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import Random from './components/random';
export default function App() {

  const [nombre, setNombre] = useState('Sofinita')
  const [precio, setPrecio] = useState(0)
  const [colores, setColor] = useState('#390040')
  const nombres = ["Pedrito", 'Franquito', 'Juancito Casablanquitos', 'Jaimito']
  const colors = ['C2C094', 'DC9596', '730071', 'A9A587'] // vamos a corregirlo pronto
  const handleChange = () =>{
    setNombre(nombres[Random(nombres.length)])
    setPrecio(Random(13))
    setColor(colors[Random(colors.length)])
    
  }

  return (
    <View style={styles.container}>
      <Text >{nombre} is eating apple, which cost ${precio}</Text>
      <Button onPress={handleChange} title="Change"></Button>
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },

  });

