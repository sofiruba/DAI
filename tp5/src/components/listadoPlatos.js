import React, { useContext } from "react";
import { View, Text } from "react-native";
import { PlatosContext } from "../../App";

export default function  ListadoPlatos(){
    const Platos = useContext(PlatosContext)
    return (
        <View>
            {Platos.map(p=>( //aca ta cada plato, hacer una card por plato? no es necesario usar props, el context ya esta
                <Text>{p.title}</Text> 
            ))}
        </View>
    )
} 