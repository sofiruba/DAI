/* Cada vez que se muestre un error, tanto sea por la validación de los campos  o porque no se cuenta con un permiso / errores de accesos a una API, Storage etc.. 
se deben mostrar con un Alert y al mismo tiempo el dispositivo debe Vibrar. Se recomienda hacer un componente reutilizable o un Helper que desde todos los lugares
 se invoque al mismo para que la funcionalidad se encuentre encapsulada y no dispersa por todo el código. 
*/
/*La aplicación debe ser capaz de poder sacar una foto (Camera) y almacenarla en la galería de imágenes (Image Picker) o seleccionar una imagen de fondo de la galería de imágenes, para luego de seleccionarla poder cambiar dinámicamente la imagen de fondo de toda la aplicación. 
La próxima vez que inicio la aplicación debe estar la imagen seleccionada (LocalStorage)
*/
import { View } from "react-native";

export default function Mensajes(){
    return(
        <View></View>
    )
}