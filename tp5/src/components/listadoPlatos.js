import React, { useContext } from "react";
import { View, Text, SafeAreaView, ScrollView, StyleSheet } from "react-native";
import { PlatosContext } from "../../App";
import Card from "./card";

export default function ListadoPlatos({ props }) {
    const Platos = useContext(PlatosContext)
    let eliminar_plato = Platos.eliminar_plato
    return (
        <SafeAreaView >
            <ScrollView style={styles.container}>
                {Platos.platos.map(p => ( //aca ta cada plato, hacer una card por plato? no es necesario usar props, el context ya esta
                    <Card style={styles.card} props={{ p, eliminar_plato }}></Card>
                ))}
            </ScrollView>
        </SafeAreaView>
    )
} 
const styles = StyleSheet.create({
    container:{
        height: 800,
        marginTop: 20,

    },

})