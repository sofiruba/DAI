import React , {useState} from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
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
            <TextInput style={styles.input} onChangeText={(text) => setEmail(text)} placeholder="Email"></TextInput>
            <TextInput secureTextEntry={true} style={styles.input} onChangeText={(text) => setPassword(text)} placeholder="Password"></TextInput>
            <Button  title="Login" onPress={()=> login({"email": email, "password": password})} />
        </View>
    )
} 
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: '11%',
        marginTop: '10%',
        backgroundColor: 'pink',
        height: '100%',
        width: '100%',
      },
      input: {
        backgroundColor: 'white',
        borderRadius: 20,
        marginTop: '5%',
        width: 200,
        height: 45,
        marginLeft: '2%',
      },
})