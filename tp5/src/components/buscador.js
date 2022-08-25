import { useState } from "react";
import { View } from "react-native";
import SelectMultiple from 'react-native-select-multiple'
export default function Buscador({ setPlatos }) {
    // https://www.npmjs.com/package/react-native-select-multiple
    const filters = ['maincourse', 'sidedish', 'dessert', 'appetizer', 'salad','bread', 'breakfast', 'soup', 'beverage', 'sauce', 'marinade', 'fingerfood', 'snack', 'drink' ]
    const [buscado, buscar] = useState([])
    return (
        <View>
            <SelectMultiple
              items={filters}
              selectedItems={buscado}
              onSelectionChange={(e) => buscar(e)}
            ></SelectMultiple>
        </View>
    )
}