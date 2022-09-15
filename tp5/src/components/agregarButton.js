import { StyleSheet, Text } from "react-native"
export default function Agregar({props}){
    if(!props.plato.agregado){
        return(
            <Text onPress={() =>{
                props.agregar_plato(props.plato)
                props.plato.agregado = true
            } } >Agregar plato al menu</Text>
        )
       
        
    }
    else{
         return(
            <Text style={styles.eliminar} onPress={() => { 
                props.plato.agregado = false
                props.eliminar_plato(props.plato.id)}}> Eliminar</Text>
        )
    }
}
const styles = StyleSheet.create({
    eliminar: {
        color: 'red'
    },
})