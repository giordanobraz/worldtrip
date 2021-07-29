import { ChakraProvider } from "@chakra-ui/react"
import { Home } from "./pages/Home";
import { theme } from "./styles/theme";
import React from 'react';
import ReactDOM from 'react-dom';


ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Home />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);