import { useNavigation } from "@react-navigation/native"
import { SafeAreaView, Text, View, Image, StyleSheet, Button } from "react-native"

export default function CardMenu({props}){
    const eliminar_plato = props.eliminar_plato
    const plato = props.p
    const navigation = useNavigation()
    return(
        <SafeAreaView style={styles.container} >
                <View>
                    <Text>{props.p.title}</Text>
                </View>

                <View>
                    <Image style={styles.img} source={{ uri: plato.image }}></Image>
                </View>
                <View >
                    <Button title="Eliminar" onPress={() => {
                        eliminar_plato(plato.id) 
                        navigation.goBack()
                    } }></Button>
                    <Text onPress={()=> navigation.navigate('Detalle', {plato})}>Ver detalle</Text>
                </View>
            </SafeAreaView>
    ) 
    
}
const styles = StyleSheet.create({
    container:{
        height: 60,
        marginTop: 30,
        width: 220,
        backgroundColor: 'red',
        borderRadius: 20,
        marginLeft: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    img:{
        height: 80,
        width: 80
    }
})