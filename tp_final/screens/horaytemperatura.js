/* La aplicación debe contar con una pantalla de visualización de la fecha y hora, temperatura actual (API de clima / Axios) y ubicación.
 La Temperatura se debe poder obtener según el geoposicionamiento  del dispositivo (Location). 
*/
import { View, Text } from "react-native";
import axios from 'axios'
import {useState, useEffect} from 'react'
export default function Clima(){
    const [temp, setTemp] = useState({temp: 0, temp_min: 0, temp_max: 0})
    const q =  `buenos aires,AR`
    
    const getClima = () => {
        return axios.get('http://api.openweathermap.org/data/2.5/weather', {params:{q : q, APPID: '467eb2e2a1738c82e813a30610d7c354' }})
        .then(res => {
            if(res.status === 200){
                setTemp(res.data.main)
            }

        })
        .catch(err => {
            console.log(err)
        }
        )
    }

    useEffect(()=> {
        getClima()
    })
    return(
        <View>
            <Text>Temperatura actual: {parseFloat(temp.temp- 273.15).toFixed(2)}° </Text>
        </View>
    )
}