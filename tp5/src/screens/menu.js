import { useContext } from "react";
import { View, Text, SafeAreaView, ScrollView, StyleSheet } from "react-native";
import { MenuContext } from "../../App";
import Card from "../components/card";
import CardMenu from "../components/cardMenu";
import { RefreshControl } from "react-native";

export default function Menu(props){
    const lista = props.route.params.props.menu
    const eliminar_plato = props.route.params.props.eliminar_plato
    return (
        <SafeAreaView  style={styles.container} >
            <Text>Menu</Text>
            <ScrollView style={styles.listado} >
            {
                lista.map(p => (
                    <CardMenu props={{p, eliminar_plato}}></CardMenu>
                ))
            }
            </ScrollView>
        </SafeAreaView>

    )
}
const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
        height:900,
        backgroundColor: '#f2c099',

    },
    listado:{
        marginTop: 0,
    }
})