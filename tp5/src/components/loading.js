import { ActivityIndicator } from "react-native"
export default function Loading({bool}){
    while(bool){
        return (
            <ActivityIndicator size="large" />
        )
    }

}