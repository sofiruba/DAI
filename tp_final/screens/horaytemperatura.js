/* La aplicación debe contar con una pantalla de visualización de la fecha y hora, temperatura actual (API de clima / Axios) y ubicación.
 La Temperatura se debe poder obtener según el geoposicionamiento  del dispositivo (Location). 
*/
import { View, Text, StyleSheet } from "react-native";
import axios from 'axios'
import { useState, useEffect } from 'react'
import * as Location from 'expo-location'
import { ImageBackground } from "react-native";
import { useContext } from "react";
import FondoContext from "../context/fondocontext";
export default function Clima() {
    const [temp, setTemp] = useState(0)
    const [location, setLocation] = useState(null)
    const [fondo, setFondo] = useContext(FondoContext)
    const [currentDate, setCurrentDate] = useState('');

    useEffect(() => {
        var date = new Date().getDate(); //Current Date
        var month = new Date().getMonth() + 1; //Current Month
        var year = new Date().getFullYear(); //Current Year
        var hours = new Date().getHours(); //Current Hours
        var min = new Date().getMinutes(); //Current Minutes
        var sec = new Date().getSeconds(); //Current Seconds
        setCurrentDate(
            date + '/' + month + '/' + year
            + ' ' + hours + ':' + min + ':' + sec
        );
    }, []);
    useEffect(() => {
        (async () => {
            const { status } = await Location.requestForegroundPermissionsAsync()
            if (status !== 'granted') {
                console.log('permiso denegado')
                Alert.alert('', 'Se requieren permisos para acceder a la ubicación')
                Vibration.vibrate(1000);
            }
            setLocation(await Location.getCurrentPositionAsync({}))
            const { latitude, longitude } = location.coords
            getClima(latitude, longitude)
            console.log('location: ' + location)
        })()
    })
    const getClima = (lat, lon) => {
        return axios.get('http://api.openweathermap.org/data/2.5/weather', { params: { lat: lat, lon: lon, APPID: '467eb2e2a1738c82e813a30610d7c354' } })
            .then(res => {
                if (res.status === 200) {
                    setTemp(res.data.main)
                }

            })
            .catch(err => {
                console.log(err)
                Alert.alert('', 'Hubo un error, intente nuevamente')
                Vibration.vibrate(1000);
            }
            )
    }
    console.log(temp)

    return (
        <ImageBackground source={{ uri: fondo }} style={{ width: '100%', justifyContent: "center", alignItems: 'center' }}>
            <View style={styles.container}>
                <Text>{currentDate}</Text>
                <Text style={styles.title}>Temperatura </Text>
                <Text>Puede tardar unos segundos por la api..</Text>
                <View style={styles.cont}>
                    <Text style={styles.temp}>{parseFloat(temp.temp - 273.15).toFixed(1)}</Text>
                </View>
                <View style={styles.row}>
                    <View style={styles.contmini}>
                        <Text>Minima</Text>
                        <Text style={styles.tempmini}>{parseFloat(temp.temp_min - 273.15).toFixed(1)}</Text>
                    </View>
                    <View style={styles.contmini}>
                        <Text>Maxima</Text>
                        <Text style={styles.tempmini}>{parseFloat(temp.temp_max - 273.15).toFixed(1)}</Text>
                    </View>

                </View>
            </View>
        </ImageBackground>

    )
}
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 700,
        borderRadius: 20,
        padding: 10,

    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
    },
    cont: {
        width: 200,
        height: 200,
        backgroundColor: 'white',
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20
    },
    temp: {
        fontSize: 50,
        fontWeight: 'bold',

    },
    row: {
        flexDirection: 'row',

    },
    contmini: {
        width: 90,
        height: 90,
        backgroundColor: 'white',
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        marginHorizontal: 20
    },
    tempmini: {
        fontSize: 20,
        fontWeight: 'bold',

    },
})