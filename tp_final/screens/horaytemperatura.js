/* La aplicación debe contar con una pantalla de visualización de la fecha y hora, temperatura actual (API de clima / Axios) y ubicación.
 La Temperatura se debe poder obtener según el geoposicionamiento  del dispositivo (Location). 
*/
import { View } from "react-native";
import axios from 'axios'
export default function Clima(){
    const [temp, setTemp] = useState({temp: 0, temp_min: 0, temp_max: 0})
    const Clima = useContext(ClimaContext)
    let ciudad = Clima.ciudad.charAt(0).toUpperCase() + Clima.ciudad.slice(1);
    const q =  `${ciudad},${Clima.pais}`
    
    const getClima = () => {
        return axios.get('http://api.openweathermap.org/data/2.5/weather', {params:{q : q, APPID: '467eb2e2a1738c82e813a30610d7c354' }})
        .then(res => {
            if(res.status === 200){
                setTemp(res.data.main)
                cont.innerText= ''
            }

        })
        .catch(err => {

            if (err.response.status === 404 ){
                cont.innerText = 'Vuelve a ingresar correctamente'
                cont.style.color = 'red'
            }
            if (err.response.status === 400 ){
                cont.innerText = 'Debes ingresar'
                cont.style.color = 'red'
            }
        }
            )
    }

    useEffect(()=> {
        getClima()
    })
    return(
        <View></View>
    )
}