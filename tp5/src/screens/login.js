import React, { useContext, useState } from "react";
import { View, TextInput, Button, StyleSheet, Text, ImageBackground } from "react-native";
import axios from 'axios'
import { useNavigation } from '@react-navigation/native';
import Loading from "../components/loading";
import { UserContext } from "../../App";

const img = { uri: ('https://wallpaperaccess.com/full/1652207.png') };

export default function Login() {

    const navigation = useNavigation();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isLoading, setLoading] = useState(false)

    const login = async (user) => {
        setLoading(true)
        axios.post('http://challenge-react.alkemy.org/', user)
            .then(res => {
                console.log(res)

                navigation.navigate('Home', { user })
                setLoading(false)
            })
            .catch(error => {
                setLoading(false)
                alert(error.message)

            })
    }


    return (
        <ImageBackground source={img} resizeMode="cover" style={styles.img}>
            <View style={styles.container}>
                <View style={styles.bcktitulo}>
                    <Text style={styles.titulo}>React Native Challenge</Text>
                </View>
                <TextInput style={styles.input} onChangeText={(text) => setEmail(text)} placeholder="Email"></TextInput>
                <TextInput secureTextEntry={true} style={styles.input} onChangeText={(text) => setPassword(text)} placeholder="Password"></TextInput>
                <View style={styles.boton} >
                    <Text  onPress={() => login({ "email": email, "password": password })} >Login</Text>
                </View>
                <View>
                    <Loading bool={isLoading}></Loading>
                </View>
            </View>
        </ImageBackground>
    )
}
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        height: '100%',
        width: '100%',
        padding: 10,
    },
    input: {
        backgroundColor: 'white',
        borderRadius: 10,
        marginTop: 20,
        width: 250,
        height: 50,
        marginLeft: '2%',
    },
    boton: {
        marginTop: 20,
        width: 100,
        height:50,
        backgroundColor:"#d4a179",
        alignItems:'center',
        justifyContent: 'center',
        borderRadius: 20,
        shadowColor: '#000',
        shadowOpacity: 0.5,
        elevation: 5
    },
    titulo: {
        fontSize: 30,
    },
    bcktitulo: {
        width: 300,
        height: 100,
        shadowColor: '#000',
        elevation: 5,
        shadowOpacity: 0.1,
        justifyContent:'center',
        backgroundColor: '#f2c099',
        alignItems:'center',
        borderRadius: 20
    },
    img: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        width: '100%',
    },
})