import { useContext } from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import { MenuContext } from "../../App";
import Card from "../components/card";
import CardMenu from "../components/cardMenu";

export default function Menu(props){
    const lista = props.route.params.props.menu
    const eliminar_plato = props.route.params.props.eliminar_plato
    const agregar_plato = props.route.params.props.agregar_plato

    return (
        <SafeAreaView  >
            <ScrollView >
            {
                lista.map(p => (
                    <CardMenu props={{p, eliminar_plato, agregar_plato}}></CardMenu>
                ))
            }
            </ScrollView>
        </SafeAreaView>

    )
}