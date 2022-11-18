import react from "react"
import { Text, Pressable, View, StyleSheet } from "react-native"
import { useNavigation } from '@react-navigation/native'
import { useContext } from "react"
import FondoContext from "../context/fondocontext"
import { ImageBackground } from "react-native"
export default function Home() {
    const [fondo, setFondo] = useContext(FondoContext)
    const navigation = useNavigation()
    return (
        <ImageBackground source={{ uri: fondo }} style={{ width: '100%', justifyContent: "center" }}>
            <View style={styles.container}>
                <Text style={styles.title}>TP Final DAI</Text>
                <Pressable
                    style={[styles.button, styles.buttonOpen]}
                    onPress={() => navigation.navigate('Clima')}
                >
                    <Text style={styles.textStyle}>Ver hora y temperatura</Text>
                </Pressable>
                <Pressable
                    style={[styles.button, styles.buttonOpen]}
                    onPress={() => navigation.navigate('Contactos')}
                >
                    <Text style={styles.textStyle}>Ver contactos</Text>
                </Pressable>
                <Pressable
                    style={[styles.button, styles.buttonOpen]}
                    onPress={() => navigation.navigate('CambioImagen')}
                >
                    <Text style={styles.textStyle}>Ver cambio de imagen</Text>
                </Pressable>
                <Pressable
                    style={[styles.button, styles.buttonOpen]}
                    onPress={() => navigation.navigate('About')}
                >
                    <Text style={styles.textStyle}>Sobre nosotras</Text>
                </Pressable>
                    
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 40,
        padding: 10,
        elevation: 2,
        marginTop: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        width: 150,
        height: 70,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 700,
        borderRadius: 20,
        padding: 10,

    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',

    }
})