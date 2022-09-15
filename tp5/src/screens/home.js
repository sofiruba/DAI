import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";

import ListadoPlatos from "../components/listadoPlatos";
import { useNavigation } from "@react-navigation/native";
import { MenuContext } from '../../App'

export default function Home(user) {
    const navigation = useNavigation();
    const [platos, setPlatos] = useState([])
    const menu = []
    const [buscado, buscar] = useState(false)
    const eliminar_plato = (id) => {
        let nuevos_platos = menu.filter(p => p.id !== id)
        menu = []
        nuevos_platos.map(plato => {
            menu.push({ title: plato.title, image: plato.image, imageType: plato.imageType, agregado: false })
        })
     
        console.log(menu, 'eliminado')


    }
    const agregar_plato = (plato) => {
        menu.push({ title: plato.title, image: plato.image, imageType: plato.imageType, agregado: true })
        console.log('agregado', menu)
    }
    const getPlatos = () => {
        return axios.get('https://api.spoonacular.com/recipes/complexSearch?apiKey=962c714fd9eb49ec95f836fcc8be05bf&&query=' + buscado)
            .then(res => {
                let listado = res.data.results
                setPlatos(listado)
            }
            )
            .catch(err => console.log(err))
    }
    let props = { menu, agregar_plato, eliminar_plato }
        return (
            <View style={styles.container}>
                <Text style={styles.title} >Titulo</Text>
                <View style={styles.row}>
                    <TextInput style={styles.input} onChangeText={(text) => buscar(text)}></TextInput>
                    <Button title='buscar' onPress={() => getPlatos()} ></Button>
                </View>
                <View>
                    <MenuContext.Provider value={props}>
                        <ListadoPlatos platos={platos}></ListadoPlatos>
                        <Button title='Ver menu' onPress={() => navigation.navigate('Menu', { props })}></Button>
                    </MenuContext.Provider>
                </View >
            </View>

        )
    
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
    row: {
        flexDirection: "row",
        flexWrap: "wrap",
    },
    input: {
        backgroundColor: '#fff',
        width: 300,
        borderRadius: 30,
    }
})