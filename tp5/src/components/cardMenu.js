import { SafeAreaView, Text, View, Image } from "react-native"
import Agregar from "./agregarButton"
export default function CardMenu({props}){
    <SafeAreaView >
                <View>
                    <Text>{props.p.title}</Text>
                </View>

                <View>
                    <Image source={{ uri: props.image }}></Image>
                </View>
                <View >
                    <Agregar props={{ agregar_plato, eliminar_plato, plato}}></Agregar>
                    <Text onPress={()=> navigation.navigate('Detalle', {plato})}>Ver detalle</Text>
                </View>
            </SafeAreaView>
}