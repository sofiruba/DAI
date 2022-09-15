import { View, Text, Button, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { useNavigation } from "@react-navigation/native";

export default function Detalle(plato) {
    const navigation = useNavigation();

    return (
        <View style={styles.pag}>
            <View style={styles.content}>
                <View>
                <Text style={styles.text}>Fideos con pesto</Text>
                </View>
                <Image style={styles.img} source={require('../../assets/fideospesto.jpg')} />
                <View style={styles.boton}>
                <Button title='Ir a home' color="#88ba93" onPress={() => navigation.goBack()}></Button>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        justifyContent: 'center',
        marginTop: 100,
        marginBottom: 'auto',
        backgroundColor: 'white',
        borderRadius: 15,
        padding: 5,
    },
    pag: {
        backgroundColor: "#fff",
        height: '100%',
        width: '100%',
        padding: 10,
    },
    img: {
        height: 230,
        width: '100%',
        marginTop: 2,
        justifyContent: 'center',
        resizeMode: 'contain',
        borderRadius: 10,
    },
    text: {
        fontSize: 20,
        alignSelf: 'center',
    },
    boton: {
        width:100,
        height: 100,
        alignSelf: 'center',
        marginTop: 50,
    },

})