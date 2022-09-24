import { View, Text, Button, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { useNavigation } from "@react-navigation/native";
import { useState } from 'react';
import Card from '../components/card';

export default function Detalle(plato_detalle) {
    const navigation = useNavigation();
    console.log(plato_detalle)
    const p = plato_detalle.route.params.plato_detalle
    return (
        <View style={styles.pag}>
            <View style={styles.content}>
                <Text style={styles.text}>{p.title}</Text>
                <Image style={styles.img} source={{uri : p.image}} />
                <View>
                    <Text style={styles.text2}>Tiempo de preparacion: {p.readyInMinutes} Minutos</Text>
                    <Text style={styles.text2}>{p.servings} porciones </Text>
                    {
                        p.ketogenic ? <Text style={styles.text2}>Apto para dieta Keto </Text> : <Text style={styles.text2}>No apto para dieta Keto</Text>

                    }
                    {                       
                       p.vegan ? <Text style={styles.textv}>Vegano </Text> : <Text style={styles.textv}>No apto vegano</Text>
                    }
                                        {                       
                       p.vegetarian ? <Text style={styles.textv}>Vegetariano </Text> : <Text style={styles.textv}>No apto vegetariano</Text>
                    }
                </View>
                <View style={styles.boton}>
                <Text color="#88ba93" style={{fontSize:18}} onPress={() => navigation.goBack()}>Ir a home</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        justifyContent: 'center',
        marginTop: 100,
        marginBottom: 'auto',
        backgroundColor: 'white',
        borderRadius: 15,
        padding: 5,
    },
    pag: {
        backgroundColor: "#fff",
        height: '100%',
        width: '100%',
        padding:10,
        
    },
    img: {
        height: 230,
        width: '100%',
        marginTop: 2,
        justifyContent: 'center',
        resizeMode: 'contain',
    },
    text: {
        fontSize: 30,
        alignSelf: 'center',
    },
    text2:{
        fontSize: 20,
    },
    textv:{
        fontSize: 20,
        color:'green',
    },
    boton: {
        width:100,
        height: 50,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
        backgroundColor:'#d4a179',
        borderRadius: 15,
    },

})