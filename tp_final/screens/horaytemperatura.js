/* La aplicación debe contar con una pantalla de visualización de la fecha y hora, temperatura actual (API de clima / Axios) y ubicación.
 La Temperatura se debe poder obtener según el geoposicionamiento  del dispositivo (Location). 
*/
import { View, Text, PermissionsAndroid} from "react-native";
import axios from 'axios'
import {useState, useEffect} from 'react'
import GeoLocation from 'react-native-geolocation-service'
import { Button } from "react-native-web";
export default function Clima(){
    const [temp, setTemp] = useState({temp: 0, temp_min: 0, temp_max: 0})
    const [location, setLocation] = useState(null)
    const q =  `buenos aires,AR`

    const permisoDeUbicacion = async () => {
    
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                {
                    title: "Permiso de ubicacion",
                    message: "La app necesita acceder a tu ubicacion",
                    buttonNeutral: "Mas tarde",
                    buttonNegative: "Cancelar",
                    buttonPositive: "OK"
                },
            )
            console.log(granted)
            if(granted === PermissionsAndroid.RESULTS.GRANTED){
                return true
            
            }
            else {
                return false
            }
        

    }

    const obtenerUbicacion = async () => {
        const resultado = await permisoDeUbicacion()
        if(resultado){
            GeoLocation.getCurrentPosition(
                position => {
                    setLocation(position)
                },
                error => {
                    setLocation(null)
                },
                {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000}
            )
        }
    }
    const getClima = () => {
        obtenerUbicacion()
        return axios.get('http://api.openweathermap.org/data/2.5/weather', {params:{lat : location.coords.latitude, lon: location.coords.longitude, APPID: '467eb2e2a1738c82e813a30610d7c354' }})
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
        obtenerUbicacion()
    })

    console.log(location)
    return(
        <View>
            <Text>lat: {location.coords.latitude } long: {location.coords.longitude}</Text>
            <Text>Temperatura actual: {parseFloat(temp.temp- 273.15).toFixed(2)}° </Text>
            <Button title='Obtener clima' onClick={getClima} ></Button>
        </View>
    )
}