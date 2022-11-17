import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, TextInput, FlatList} from 'react-native';
import * as Contacts from 'expo-contacts';
import { useEffect, useState, useContext } from 'react';
import CardContacto from '../components/cardContactos';
import FondoContext from '../context/fondocontext';
import { ImageBackground } from 'react-native';
import React from 'react';

export default function Contactos() {
    let [error, setError] = useState(undefined);
    let [contactos, setContactos] = useState(undefined);
    const [ fondo, setFondo ] = React.useContext(FondoContext);
    useEffect(() => {
        (async () => {
            const { status } = await Contacts.requestPermissionsAsync();
            if (status === "granted") {
                const { data } = await Contacts.getContactsAsync({
                    fields: [Contacts.Fields.Birthday, Contacts.Fields.Emails, Contacts.Fields.FirstName, Contacts.Fields.LastName, Contacts.Fields.PhoneNumbers]
                });

                if (data.length > 0) {
                    setContactos(data);
                } else {
                    setError("No se han encontrado contactos"); // acá iría mensajes al usuario
                }
            } else {
                setError("El acceso ha sido denegado."); // acá iría mensajes al usuario
            }
        })();
    }, []);

    let getContactData = (data, property) => {
        if (data) {
            return data.map((data, index) => {
                return (
                    <View key={index}>
                        <Text>{data.label}: {data[property]}</Text>
                    </View>
                )
            });
        }
    }

    const renderItem = ({ item}) => {
        return(
            <CardContacto props={{contact: item, getContactData: getContactData}}/>
        )
    }
    let getContactRows = () => {
        if ((contactos !== undefined)) {
            

           
                return (
                    <View  style={styles.contact} >
                        <FlatList
                            data={contactos}
                            keyExtractor={(item) => item.id}
                            renderItem={renderItem}
                            ItemSeparatorComponent={() => <View style={{ marginVertical: 10, borderColor: '#00000020', borderWidth: 1, marginHorizontal: 10, }} />}
                            ListHeaderComponent={() => <Text style={{ fontWeight: 'bold', marginBottom: 10, marginHorizontal: 10, fontSize: 15 }}>Contactos</Text>}
                        />
                    </View>

                );
           

        } else {
            return <Text>Esperando Contactos...</Text>
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={{ uri: fondo }} style={{width: '100%',  justifyContent: "center", alignItems: 'center'}}>
            <View>
                <Text style={styles.title}>Esta es tu lista de contactos:</Text>

            </View>
            <ScrollView>
                {getContactRows()}
            </ScrollView>
            <Text>{error}</Text>
            <StatusBar style="auto" />
            </ImageBackground>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    contact: {
        marginVertical: 8,
        marginBotton: 50,
        marginTop: 32,
        width: 260
        },
    title: {
        marginTop: 80,
        fontSize: 20,
        fontWeight: 'bold'
    }
});
