import { useContext } from "react";
import { View, Text, SafeAreaView, ScrollView, StyleSheet } from "react-native";
import { MenuContext } from "../../App";
import Card from "../components/card";
import CardMenu from "../components/cardMenu";
import { RefreshControl } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Menu(props){
    const navigation = useNavigation()
    const lista = props.route.params.props.menu
    const eliminar_plato = props.route.params.props.eliminar_plato
    return (
        <SafeAreaView  style={styles.container} >
            <Text style={styles.title}>Menu</Text>
            <View style={styles.btn} onTouchStart={() => navigation.goBack()} >
                        <Text> Volver</Text>
                        </View>
            <ScrollView>
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
        height: 900,
        backgroundColor: '#f4bfa3',

    },
    title: {
        fontSize: 38,
        fontWeight: 'bold',
        marginTop: 50
    },
    btn:{
        marginTop: 20,
        width: 300,
        height:30,
        backgroundColor:"#d4a179",
        alignItems:'center',
        justifyContent: 'center',
        borderRadius: 20,
        shadowColor: '#000',
        shadowOpacity: 0.5,
        elevation: 5
    },
})