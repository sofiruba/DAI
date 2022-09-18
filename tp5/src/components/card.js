import React, { useContext, useState } from "react";
import { View, SafeAreaView, Text, Image, StyleSheet } from "react-native";
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
    console.log(plato)
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
            <View style={styles.row}>
                <View>
                    <Text style={styles.title}>{plato.title}</Text>
                    <View >
                        {
                            Menu.menu.includes(plato) ? <Text style={{ color: 'red', textDecorationLine: 'underline' }} onPress={() => eliminar_plato(plato.id)}>Eliminar</Text> : <Text onPress={() => agregar_plato(plato)}>Agregar </Text>
                        }
                        <Text onPress={getDetalle}>Ver detalle</Text>
                        <Loading bool={isLoading}></Loading>
                    </View>
                </View>

                <View style={styles.img}>
                    <Image style={styles.image} source={{ uri: plato.image }}></Image>

                </View>


            </View>

        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    container: {
        width: 300,
        height: 150,
        backgroundColor: "#fff",
        borderRadius: 13,
        marginTop: 20,
        borderColor: '#F8F7F7',
        borderWidth: 1,
    },
    shadow: {
        shadowColor: '#171717',
        shadowOpacity: 0.1,
        elevation: 3,
    },
    image: {
        height: 50,
        width: 50,
        marginTop: 5,

    },
    titulo: {
        fontSize: 20,
        marginTop: 3,
        marginLeft: 5,
    },
    img: {
        marginLeft: 80,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },

    row: {
        flexDirection: "row",
        flexWrap: "wrap",
    },

});