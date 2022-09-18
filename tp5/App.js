import { createContext } from 'react';
import Main from './src/navigation/main';
export const PlatosContext = createContext([])
export const UserContext = createContext({})
export const MenuContext = createContext([])
export default function App() {

  return (

      <Main></Main>

  );
}

