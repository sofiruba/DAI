import React from "react";
import { View, SafeAreaView, Text, Image, StyleSheet } from "react-native";

export default function Card({ props }) {
    return (
        <View style={{ backgroundColor: '#deffe5' }}>
            <SafeAreaView style={styles.card}>
                <View>
                    <Text>{props.p.title}</Text>
                </View>

                <View>
                    <Image source={{ uri: props.p.image }}></Image>
                </View>
                <View style={styles.row}>
                    <Text style={styles.eliminar} onPress={() => props.eliminar_plato(props.p.id)}> Eliminar</Text>
                    <Text> Ver detalle</Text>
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
    },
    eliminar: {
        color: 'red'
    }
});