import { createContext } from 'react';
import Main from './src/navigation/main';
export const MenuContext = createContext([])
export const UserContext = createContext({})
export default function App() {

  return (

      <Main></Main>

  );
}

