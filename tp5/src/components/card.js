import React from "react";
import { View, SafeAreaView, Text, Image, StyleSheet } from "react-native";

export default function Card({ props }) {
    return (
        <View  style={{backgroundColor:'#deffe5'}}>
        <SafeAreaView style={styles.card}>
            <View>
                <View>
                    <Text>{props.title}</Text>
                </View>
            </View>
            <View>
                <Image source={{ uri: props.image }}></Image>
            </View>
        </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        width: 220,
        height: 100,
        backgroundColor: "#F8F7F7",
        borderRadius: 13,
        marginTop: 30,
        marginHorizontal: 10,
        marginLeft: "auto",
        marginRight: "auto",
        borderColor: '#000',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});