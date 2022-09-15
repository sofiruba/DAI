import React, { useState } from "react";
import { View, SafeAreaView, Text, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Agregar from "./agregarButton";
export default function Card({ props }) {
    const navigation = useNavigation()
    const plato = props.p
    const eliminar_plato = props.eliminar_plato
    const agregar_plato = props.agregar_plato
    return (
        <View style={{ backgroundColor: '#deffe5' }}>
            <SafeAreaView style={styles.card}>
                <View>
                    <Text>{plato.title}</Text>
                </View>

                <View>
                    <Image source={{ uri: plato.image }}></Image>
                </View>
                <View >
                    <Agregar props={{ agregar_plato, eliminar_plato, plato}}></Agregar>
                    <Text onPress={()=> navigation.navigate('Detalle', {plato})}>Ver detalle</Text>
                </View>
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        width: 220,
        height: 100,

        borderRadius: 13,
        marginVertical: 10,
        backgroundColor: "#F8F7F7",
        borderColor: '#000',
        borderWidth: 1,
        justifyContent: 'center',
    },
    row:{
        flexDirection: "row",
        flexWrap: "wrap",
    }
});