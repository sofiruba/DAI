import React, { useContext, useState } from "react";
import { View, SafeAreaView, Text, Image, StyleSheet, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MenuContext } from "../../App";
import axios from "axios";
import Loading from "./loading";

export default function Card({ props }) {
    const [isLoading, setLoading] = useState(false)
    const Menu = useContext(MenuContext)
    const plato = props.p
    const agregar_plato = Menu.agregar_plato
    const eliminar_plato = Menu.eliminar_plato
    const navigation = useNavigation()
    const getDetalle = () => {
        setLoading(true)
        return axios.get('https://api.spoonacular.com/recipes/' + plato.id + '/information?apiKey=962c714fd9eb49ec95f836fcc8be05bf')
            .then(res => {
                let plato_detalle = res.data
                navigation.navigate('Detalle', { plato_detalle })
                setLoading(false)
            })
    }
    return (





        <SafeAreaView style={[styles.container, styles.shadow]}>
            <Text style={styles.title}>{plato.title}</Text>
            <View style={[styles.card, styles.row]}>
                <View>
                    {
                        Menu.menu.includes(plato) ? <View style={styles.boton}><Text backgroundColor={'red'} onPress={() => eliminar_plato(plato.id)}>Eliminar</Text></View> : <View style={styles.boton}><Text onPress={() => agregar_plato(plato)}>Agregar</Text></View>
                    }
                </View>
                <View style={styles.cont}>
                    <Image style={styles.image} source={{ uri: plato.image }}></Image>
                    <Text onPress={getDetalle}>Ver detalle</Text>
                    <Loading bool={isLoading}></Loading>
                </View>
            </View>
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    container: {
        width: 300,
        height: 200,
        backgroundColor: "#fff",
        borderRadius: 13,
        marginTop: 20,
        borderColor: '#F8F7F7',
        borderWidth: 1,
        justifyContent: 'center',

    },
    shadow: {
        shadowColor: '#171717',
        shadowOpacity: 0.1,
        elevation: 3,
    },

    image: {
        height: 90,
        width: 90,

    },
    title: {
        fontSize: 18,
        padding: 8,
        alignSelf: 'center',

    },

    row: {
        flexDirection: "row",
        flexWrap: "wrap",
    },

    cont: {
        alignItems: 'flex-end',
    },

    card: {
        justifyContent: 'center',
    },

    boton: {
        width: 80,
        height: 45,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 25,
        backgroundColor:'#d4a179',
    },
});