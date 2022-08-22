import { StatusBar } from 'expo-status-bar';
import { createContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Main from './src/navigation/main';
import Login from './src/screens/login';
export const PlatosContext = createContext([])
export default function App() {

  return (

      <Main></Main>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
