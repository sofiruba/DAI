import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Button, ImageBackground } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as MediaLibrary from 'expo-media-library';
import { useContext } from 'react';
import FondoContext from '../context/fondocontext';

export default function CambioImagen() {
  const [fondo, setFondo] = useContext(FondoContext);
  const showImagePicker = async () => {
    // Permisos 
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
      alert("You've refused to allow this appp to access your photos!"); // acá iría mensajes al usuario
      return;
    }
    const result = await ImagePicker.launchImageLibraryAsync();
    console.log(result);

    if (!result.cancelled) {
      setFondo(result.uri);
      console.log(result.uri);
    }
  }

  const openCamera = async () => {
    // Permisos
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("You've refused to allow this appp to access your camera!"); // acá iría mensajes al usuario
      return;
    }

    const result = await ImagePicker.launchCameraAsync();

    console.log(result);

    if (!result.cancelled) {
      setFondo(result.uri);
      console.log(result.uri);
    }
  }
  const guardarFoto = async (item) => {
    const permission = await MediaLibrary.requestPermissionsAsync();
    if (permission.granted) {
      try {
        const asset = await MediaLibrary.createAssetAsync(item);
        MediaLibrary.createAlbumAsync('Images', asset, false)
          .then(() => {
            console.log('File Saved Successfully!'); // acá iría mensajes al usuario
          })
          .catch(() => {
            console.log('Error In Saving File!');
          });
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log('Need Storage permission to save file');
    }
  };


  return (
  
    <View style={styles.screen}>
        <ImageBackground source={{ uri: fondo }} style={{width: '100%',  justifyContent: "center", alignItems: 'center'}}>
      <Text style={{textAlign: 'center'}}>¿Como te gustaría seleccionar tu fondo?</Text>
      <View style={styles.buttonContainer}>
        <Button onPress={showImagePicker} title="Desde galería" />
        <Button onPress={openCamera} title="Desde la cámara" />
      </View>

      <View style={styles.imageContainer}>
        {
          fondo !== '' && <Image
            source={{ uri: fondo }}
            style={styles.image}
          />
        }
        <Button onPress={() => guardarFoto(fondo)} title="Guardar" />
      </View>
      </ImageBackground>
    </View>

  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    width: 400,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  imageContainer: {
    padding: 30
  },
  image: {
    width: 400,
    height: 300,
    resizeMode: 'cover'
  }
});
