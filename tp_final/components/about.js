/*
Cada Aplicación debe tener una pantalla de About (Acerca de) que tenga un código de QR (Barcode Scanner / QR Scanner) con los nombres de los integrantes del grupo
, pero a su vez un botón que les permita escanear otra app y les muestre en un Modal quienes fueron los integrantes de la aplicación Escaneada!
 */
import { useState } from "react";
import { Button, View, StyleSheet, Modal, Pressable } from "react-native";
import QRscanner from "./QRscanner";


export default function About() {
    const [isOpen, setIsOpen] = useState(false)
    const [modalVisible, setModalVisible] = useState(false);


    return (
        <View>
            <Button title="Abrir camara" onPress={() => setIsOpen(!isOpen)}></Button>

            <Button title="Ver integrantes" ></Button>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('', '¡Modal cerrado!')
                    Vibration.vibrate(1000);
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>

                    </View>
                </View>
            </Modal>
            <Pressable
                style={[styles.button, styles.buttonOpen]}
                onPress={() => setModalVisible(true)}
            >
            </Pressable>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
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
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
});
