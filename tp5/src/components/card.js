import React from "react"
import { View, Text, StyleSheet, Image } from "react-native"
import { SafeAreaView } from "react-native";

export default function Card({props}) {
    return (
        <SafeAreaView>
      
        <View>
          <View>
            <Text>{props.plato}</Text>
          </View>
         
        </View>
        <View>
          <Image source={props.foto}></Image>
        </View>

    </SafeAreaView>



  );
}