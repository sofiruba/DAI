import react from "react"
import { Text, Pressable, View, StyleSheet } from "react-native"
import { useNavigation} from '@react-navigation/native'
export default function Home() {
    const navigation = useNavigation()
    return (
        <View>
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
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        marginTop: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
})