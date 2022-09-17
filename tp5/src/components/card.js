import React, { useContext, useState } from "react";
import { View, SafeAreaView, Text, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MenuContext } from "../../App";
export default function Card({ props }) {
    const Menu = useContext(MenuContext)
    return (





        <SafeAreaView style={[styles.container, styles.shadow]}>
            <View style={styles.row}>
                <View>
                    <Text style={styles.title}>{plato.title}</Text>
                    <View >
                {
                    Menu.menu.includes(plato) ? <Text style={{color: 'red', textDecorationLine: 'underline'}} onPress={() => eliminar_plato(plato.id)}>Eliminar</Text> : <Text  onPress={() => agregar_plato(plato)}>Agregar </Text>
                }
                <Text onPress={() => navigation.navigate('Detalle', { plato })}>Ver detalle</Text>
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
        elevation: 15,
    },
    image: {
        height: 100,
        width: 100,
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
        alignItems:'center'
    },
    
    row: {
        flexDirection: "row",
        flexWrap: "wrap",
    },
   
});