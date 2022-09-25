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
                <Image style={styles.img} source={{ uri: p.image }} />
                <View style={styles.row}>
                    <View style={styles.reloj}>
                        <Text style={styles.reloj2}>L</Text>
                    </View>
                    <Text style={styles.text2}> : {p.readyInMinutes} Minutos</Text>
                </View>  
                <View style={styles.row}>
                    <View style={styles.bckporciones}>
                        <Text style={[styles.text2, {color:'#f7e3d5'}]}>{p.servings}</Text>
                    </View>
                    <Text style={styles.text2}> porciones</Text>
                </View>
                {
                    p.ketogenic ? <Text style={styles.text2}>Apto para dieta Keto </Text> : <Text style={styles.text2}>No apto para dieta Keto</Text>

                }
                {
                    p.vegan ? <Text style={styles.textv}>Vegano </Text> : <Text style={styles.textv2}>No apto vegano</Text>
                }
                {
                    p.vegetarian ? <Text style={styles.textv}>Vegetariano </Text> : <Text style={styles.textv2}>No apto vegetariano</Text>
                }
                <View style={styles.boton}>
                    <Text color="#88ba93" style={{ fontSize: 18 }} onPress={() => navigation.goBack()}>Ir a home</Text>
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
    row: {
        flexDirection: "row",
        flexWrap: "wrap",
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
    text2: {
        fontSize: 20,
    },
    textv: {
        fontSize: 20,
        color: 'green',
    },
    textv2: {
        fontSize: 20,
        color: 'red',
    },
    boton: {
        width: 100,
        height: 50,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
        backgroundColor: '#d4a179',
        borderRadius: 15,
    },
    reloj: {
        width: 30,
        height: 30,
        backgroundColor: '#fff',
        borderWidth: 3,
        borderColor: '#404040',
        borderRadius: 100,
    },
    reloj2: {
        color: '#404040',
        fontSize: 12,
        fontWeight: '800',
        alignSelf: 'center',
        marginLeft: 2,
    },
    bckporciones: {
        width: 35,
        height: 35,
        backgroundColor: '#d4a179',
        alignItems: 'center',
        borderRadius: 7,
    },

})