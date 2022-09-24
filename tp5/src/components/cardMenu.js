import { useNavigation } from "@react-navigation/native"
import axios from "axios"
import { SafeAreaView, Text, View, Image, StyleSheet, Button } from "react-native"
import Loading from "./loading"
import { useState } from "react"
export default function CardMenu({ props }) {
    const [isLoading, setLoading] = useState(false)
    const eliminar_plato = props.eliminar_plato
    const plato = props.p
    const navigation = useNavigation()
    const getDetalle = () => {
        setLoading(true)
        return axios.get('https://api.spoonacular.com/recipes/' + plato.id + '/information?apiKey=962c714fd9eb49ec95f836fcc8be05bf')
            .then(res => {
                let plato_detalle = res.data
                navigation.navigate('Detalle', { plato_detalle })
                setLoading(false)

            })
    }
    return (
        <SafeAreaView style={styles.container} >
            <View>
                <Text>{props.p.title}</Text>
            </View>

            <View>
                <Image style={styles.img} source={{ uri: plato.image }}></Image>
            </View>
            <View style={styles.boton}>
                <Text onPress={() => {
                    eliminar_plato(plato.id)
                    navigation.goBack()
                }}>Eliminar</Text>
            </View>
        </SafeAreaView>
    )

}
const styles = StyleSheet.create({
    container: {
        height: 210,
        marginTop: 30,
        width: 250,
        backgroundColor: 'red',
        borderRadius: 15,
        marginLeft: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        shadowColor: '#000',
        elevation: 5,
        shadowOpacity: 0.1,
    },
    img: {
        height: 70,
        width: 70,
        marginBottom: 4,
    },
    boton: {
        width: 80,
        height: 45,
        borderRadius: 15,
        backgroundColor: '#d4a179',
        alignItems: 'center',
        justifyContent: 'center',
    },
    
})