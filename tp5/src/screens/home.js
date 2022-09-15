import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import { View, Text, StyleSheet, TextInput,Button } from "react-native";

import ListadoPlatos from "../components/listadoPlatos";
import { PlatosContext } from '../../App'

export default function Home(user) {
    const [platos, setPlatos] = useState([])
    const [buscado, buscar] = useState(false)
    const eliminar_plato = (id) => {
        let nuevos_platos = platos.filter(p => p.id !== id)
        setPlatos(nuevos_platos)
    }
    const crear_plato = (nuevo_plato) => {
        setPlatos(p => [...p, { title: nuevo_plato.title, image: nuevo_plato.image, imageType: nuevo_plato.imageType }])
    }
    const getPlatos = () => {
        return axios.get('https://api.spoonacular.com/recipes/complexSearch?apiKey=962c714fd9eb49ec95f836fcc8be05bf')
            .then(res => {
                let listado = res.data.results
                setPlatos(listado)
            }

            )
            .catch(err => console.log(err))
    }


    useEffect(() => {
        getPlatos()
    }, [])

    if (!buscado) {
        return (
            <View style={styles.container}>
                <Text style={styles.title} >Titulo</Text>
                <View style={styles.row}>
                    <TextInput style={styles.input} onChangeText={(text) => buscar(text)}></TextInput>
                    <Button title='buscar'></Button>
                </View>
            </View>
        )
    }
    else {
        return (
            <View>
                <PlatosContext.Provider value={{ platos, crear_plato, eliminar_plato }}>
                    <ListadoPlatos></ListadoPlatos>
                </PlatosContext.Provider>
            </View >
        )
    }
}
const styles = StyleSheet.create({
    title: {
        fontSize: 50,
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    row:{
        flexDirection: "row",
        flexWrap: "wrap",
    },
    input: {
        backgroundColor: '#fff',
        width: 300,
        borderRadius: 30,
    }
})