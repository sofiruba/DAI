/*
Cada Aplicación debe tener una pantalla de About (Acerca de) que tenga un código de QR (Barcode Scanner / QR Scanner) con los nombres de los integrantes del grupo
, pero a su vez un botón que les permita escanear otra app y les muestre en un Modal quienes fueron los integrantes de la aplicación Escaneada!
 */
import { useState } from "react";
import { Button, View, StyleSheet, Modal, Pressable } from "react-native";
import { BarCodeScanner } from 'expo-barcode-scanner';



export default function About() {
    const [isOpen, setIsOpen] = useState(false)
    const [modalVisible, setModalVisible] = useState(false);
    const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [text, setText] = useState('Not yet scanned')

  const askForCameraPermission = () => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })()
  }

  // Request Camera Permission
  useEffect(() => {
    askForCameraPermission();
  }, []);

  // What happens when we scan the bar code
  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setText(data)
    console.log('Type: ' + type + '\nData: ' + data)
  };

  // Check permissions and return the screens
  if (hasPermission === null) {
    return (
      <View style={styles.container}>
        <Text>Requesting for camera permission</Text>
      </View>)
  }
  if (hasPermission === false) {
    return (
      <View style={styles.container}>
        <Text style={{ margin: 10 }}>No access to camera</Text>
        <Button title={'Allow Camera'} onPress={() => askForCameraPermission()} />
      </View>)
  }


    return (
        <View>
            <Button title="Abrir camara" onPress={() => setIsOpen(!isOpen)}></Button>

            <Button title="Ver integrantes" ></Button>
            <View style={styles.barcodebox}>
                        <BarCodeScanner
                            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                            style={{ height: 550, width: 400 }} />
                    </View>
                    <Text style={styles.maintext}>{text}</Text>

                    {scanned && <Button title={'Scan again?'} onPress={() => setScanned(false)} color='#556b2f' />}
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
    },  maintext: {
        fontSize: 24,
        margin: 20,
        color:'#eee'
      },
      barcodebox: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '70%',
        width: '90%',
        overflow: 'hidden',
        borderRadius: 30,
        backgroundColor: '#556b2f'
      }
});
