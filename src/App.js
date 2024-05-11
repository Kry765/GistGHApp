import { CreateGist } from "./Components/CreateGist";
import ViewGist from "./Components/ViewGist";
import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";

function App() {
  return (
    <ChakraProvider>
      <CreateGist />
      <ViewGist />
    </ChakraProvider>
  );
}

export default App;
