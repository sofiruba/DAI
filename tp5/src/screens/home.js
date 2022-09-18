import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";

import ListadoPlatos from "../components/listadoPlatos";
import { useNavigation } from "@react-navigation/native";
import { MenuContext } from '../../App'
import Loading from "../components/loading";

export default function Home(user) {
    const navigation = useNavigation();
    const [platos, setPlatos] = useState([])
    const [menu, setMenu] = useState([])
    const [buscado, buscar] = useState(false)
    const [isLoading, setLoading] = useState(false)
    const eliminar_plato = (id) => {
        let nuevo_menu = menu.filter(p => p.id !== id)
        setMenu(nuevo_menu)
        console.log( menu, 'eliminado')


    }
    console.log(menu)
    const agregar_plato = (plato) => {
        setMenu(menu => [...menu, plato])
        console.log('agregado', menu)
    }
    const getPlatos = () => {
        setLoading(true)
        return axios.get('https://api.spoonacular.com/recipes/complexSearch?apiKey=962c714fd9eb49ec95f836fcc8be05bf&&query=' + buscado)
            .then(res => {
                let listado = res.data.results
                setPlatos(listado)
                setLoading(false)
            }
            )
            .catch(err => console.log(err))
    }
    let props = { menu, agregar_plato, eliminar_plato }

        return (
            <View style={styles.container}>
                <Text style={styles.title} >Bienvenido!</Text>
                <View style={styles.box}>
                    <Text>Busca la receta que desees y agregala a tu menu! Con el boton de abajo puedes ver todos los platos agregados a tu menu! </Text>
                </View>
                <View style={styles.row}>
                    <TextInput style={styles.input} onChangeText={(text) => buscar(text)}></TextInput>
                    <View style={styles.btnBuscar} onTouchStart={() => getPlatos()}>
                    <Text >Buscar</Text>
                        
                    </View>
                </View>
                <View>
                    <MenuContext.Provider value={props}>
                        <Loading bool={isLoading}></Loading>
                        <ListadoPlatos platos={platos}></ListadoPlatos>
                        <View style={styles.btn} onTouchStart={() => navigation.navigate('Menu', { props })} >
                        <Text > Ver menu</Text>

                        </View>
                    </MenuContext.Provider>
                </View >
            </View>

        )
    
}
const styles = StyleSheet.create({
    title: {
        fontSize: 40,
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f2c099',
        height: 900
    },
    row: {
        flexDirection: "row",
        flexWrap: "wrap",
        marginTop: 30
    },
    input: {
        backgroundColor: '#fff',
        width: 200,
        borderRadius: 10,
        marginRight: 5
    },
    box:{
        height: 70,
        width: 300,
        shadowColor: '#000',
        elevation: 5,
        shadowOpacity: 0.5,
        backgroundColor: '#f7e3d5',
        borderRadius: 5
    },
    btn:{
        marginTop: 20,
        width: 300,
        height:50,
        backgroundColor:"#d4a179",
        alignItems:'center',
        justifyContent: 'center',
        borderRadius: 20,
        shadowColor: '#000',
        shadowOpacity: 0.5,
        elevation: 5
    },
    btnBuscar:{
        width: 80,
        height:50,
        backgroundColor:"#d4a179",
        alignItems:'center',
        justifyContent: 'center',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOpacity: 0.5,
        elevation: 5 
    }
})