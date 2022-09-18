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
                <View>
                <Text style={styles.text}>{p.title}</Text>
                </View>
                <Image style={styles.img} source={{uri : p.image}} />
                <View>
                    <Text>Tiempo de preparacion: {p.readyInMinutes} Minutos</Text>
                    <Text>{p.servings} porciones </Text>
                    {
                        p.ketogenic ? <Text>Apto para dieta Keto </Text> : <Text>No apto Keto</Text>

                    }
                    {                       
                       p.vegan ? <Text>Es vegano </Text> : <Text>No apto vegano</Text>
                    }
                                        {                       
                       p.vegetarian ? <Text>Vegetariano </Text> : <Text>No apto vegetariano</Text>
                    }
                </View>
                <View style={styles.boton}>
                <Button title='Ir a home' color="#88ba93" onPress={() => navigation.goBack()}></Button>
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
        padding: 10,
    },
    img: {
        height: 230,
        width: '100%',
        marginTop: 2,
        justifyContent: 'center',
        resizeMode: 'contain',
        borderRadius: 10,
    },
    text: {
        fontSize: 20,
        alignSelf: 'center',
    },
    boton: {
        width:100,
        height: 100,
        alignSelf: 'center',
        marginTop: 50,
    },

})