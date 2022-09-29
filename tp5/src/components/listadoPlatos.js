import React, { useContext } from "react";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import { MenuContext } from "../../App";
import Card from "./card";

export default function ListadoPlatos({ platos }) {
    const Menu = useContext(MenuContext)
    const eliminar_plato = Menu.eliminar_plato
    const agregar_plato = Menu.agregar_plato
    return (
        <SafeAreaView style={styles.container} >
            <ScrollView >
                {platos.map(p => ( //aca ta cada plato, hacer una card por plato? no es necesario usar props, el context ya esta
                    <Card key={p.id} style={styles.card} props={{ p, eliminar_plato, agregar_plato }}></Card>
                ))}
            </ScrollView>
        </SafeAreaView>
    )
} 
const styles = StyleSheet.create({
    container:{
        height: 580,
        marginTop: 20,

    },

})