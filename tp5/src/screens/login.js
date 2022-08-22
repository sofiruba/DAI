import React , {useState} from "react";
import { View, TextInput, Button, StyleSheet, Text } from "react-native";
import axios from 'axios'
import {useNavigation} from '@react-navigation/native';

export default function Login() {
    const navigation = useNavigation();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const login = async (user) => {
        axios.post('http://challenge-react.alkemy.org/', user)
            .then(res => {
                console.log(res)
                navigation.navigate('Home')
            })
            .catch(error => {
                console.error( error)
   
            })
    }
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.titulo}>RESTAURANTE</Text>
            </View>
            <TextInput style={styles.input} onChangeText={(text) => setEmail(text)} placeholder="Email"></TextInput>
            <TextInput secureTextEntry={true} style={styles.input} onChangeText={(text) => setPassword(text)} placeholder="Password"></TextInput>
            <View style={styles.boton} >
            <Button  title="Login" color="#88ba93" onPress={()=> login({"email": email, "password": password})} />
            </View>
        </View>
    )
} 
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        marginTop: 3,
        backgroundColor: '#deffe5',
        height: '100%',
        width: '100%',
      },
      input: {
        backgroundColor: 'white',
        borderRadius: 10,
        marginTop: 20,
        width: 200,
        height: 45,
        marginLeft: '2%',
      },
      boton: {
        marginTop: 20,
        borderRadius: 20,
      },
      titulo: {
        fontSize: 30,
        marginBottom: 50,
        borderRadius: 20,
      },
})