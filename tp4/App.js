import { StatusBar } from 'expo-status-bar';
import React,{ useState } from 'react';
import { StyleSheet, Text, View, Button , Image} from 'react-native';

import Random from './components/random';
export default function App() {

  const [nombre, setNombre] = useState('Sofinita')
  const [precio, setPrecio] = useState(0)
  const [colorsbac, setColorb] = useState('#390040')
  const [colorsbut, setColorbt] = useState('#390040')
  const [imagen, setImagen] = useState('')
  const nombres = ["Pedrito", 'Franquito', 'Juancito Casablanquitos', 'Jaimito']
  const colorsBackArray = ['#C2C094', '#DC9596', '#730071', '#A9A587'] 
  const colorsButtonArray = ['#9D858D', '#8CABBE', '#A4BFEB', '#A4B4DE', '#A4A8D1', '#B0A4C2', '#B49AA9'] 
  const imagenesArray = [{uri: 'https://i.pinimg.com/originals/98/b8/19/98b81935e799059c7e93d8a88bc2e712.png'}, {uri:'https://i.pinimg.com/originals/c2/30/3f/c2303ffb840d7e2b4843483400b60574.png'}, {uri: 'https://i.pinimg.com/originals/46/f5/00/46f50056be96514001b9d30ec21ef668.png'}, {uri: 'https://i.pinimg.com/originals/2c/45/80/2c4580da4704fe2b99027bbc692c4cfa.png'}, {uri: 'https://codingbootcamps.io/wp-content/uploads/m2.png'}, {uri: 'https://i.pinimg.com/originals/4a/d9/ed/4ad9ed3c00382aea47e38adae48df159.gif'}]
  const handleChange = () =>{
    setNombre(nombres[Random(nombres.length)])
    setPrecio(Random(13))
    setColorb(colorsBackArray[Random(colorsBackArray.length)])
    setColorbt(colorsButtonArray[Random(colorsButtonArray.length)])
    setImagen(imagenesArray[Random(imagenesArray.length)])
    console.log(imagen)
  }

  return (
    <View style={[{backgroundColor: colorsbac}, styles.container]}>
      <Text >{nombre} is eating apple, which cost ${precio}</Text>
      <Button onPress={handleChange} title="Change" color={colorsbut}></Button>
      <View>
        <Image style={styles.img} source={imagen}></Image>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    img:{
      width: '100px',
      height: '200px',

    },

  });

