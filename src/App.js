import {CreateGist} from './Components/CreateGist'
import { ChakraProvider } from '@chakra-ui/react'
import './App.css';

function App() {
  return (
    <ChakraProvider>
      <CreateGist />
    </ChakraProvider>
  );
}

export default App;
