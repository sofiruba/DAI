import { View, Text } from "react-native";

export default function CardContacto(props) {
    console.log(props)
    const contact = props.props.contact
    const getContactData = props.props.getContactData
    return (
        <View>
            <Text></Text>
            <Text>Nombre: {contact.firstName} {contact.lastName}</Text>
            {contact.birthday ? <Text>Cumpleaños: {contact.birthday.month}/{contact.birthday.day}/{contact.birthday.year}</Text> : undefined}
            {getContactData(contact.phoneNumbers, "numero")}
            {getContactData(contact.emails, "email")}
        </View>
    )
    

}