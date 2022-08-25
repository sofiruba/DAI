import React from "react";
import { View, SafeAreaView } from "react-native";

export default function Card({ props }) {
    return (
        <SafeAreaView>

            <View>
                <View>
                    <Text>{props.title}</Text>
                </View>

            </View>
            <View>
                <Image source={{uri: props.image}}></Image>
            </View>
        </SafeAreaView>

    )
} 