import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import { View, Text } from "react-native";

import ListadoPlatos from "../components/listadoPlatos";


export default function Home(){

 const platos = createContext([])

   const getPlatos = ()=>{


        return axios.get('https://api.spoonacular.com/recipes/complexSearch?apiKey=962c714fd9eb49ec95f836fcc8be05bf')
        .then(res=> 
           platos.push(...res.data.results)
        )
        .catch(err => console.log(err))
    }
    
    
    useEffect(()=>{
        getPlatos()
    }, [])
        console.log(platos)
    

    return (
        <View>
            {platos.map( p => (
                            <platos.Provider value ={p}>
                            <Text> {plato.title}</Text>
                        </platos.Provider>
            ))}

        </View>
    )
} 