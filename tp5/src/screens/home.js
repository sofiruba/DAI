import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import { View, Text } from "react-native";

import ListadoPlatos from "../components/listadoPlatos";
import {PlatosContext} from '../../App'

export default function Home(){
    const [platos,setPlatos ] = useState({})
   const getPlatos = ()=>{


        return axios.get('https://api.spoonacular.com/recipes/complexSearch?apiKey=962c714fd9eb49ec95f836fcc8be05bf')
        .then(res=> {
            let listado = res.data.results
           setPlatos(listado)
        }

        )
        .catch(err => console.log(err))
    }
    
    
    useEffect(()=>{
        getPlatos()
    }, [])

    const eliminar_plato = (id) => {
        let nuevos_platos = platos.filter(p => p.id !== id)
    }
     
    const crear_plato = (nuevo_plato) =>{
        setPlatos(p => [...p, {title : nuevo_plato.title, image: nuevo_plato.image, imageType : nuevo_plato.imageType}]  )
    }

    return (
        <View>
            <PlatosContext.Provider value={platos}>
                <ListadoPlatos></ListadoPlatos>
            </PlatosContext.Provider>

        </View>
    )
} 