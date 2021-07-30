/* eslint-disable react/jsx-no-undef */
import { ChakraProvider } from "@chakra-ui/react"
import { Home } from "./pages/Home";
import { theme } from "./styles/theme";
import React from 'react';
import ReactDOM from 'react-dom';
import { Continente } from "./pages/continentes/[slug]";
import {
  Switch,
  Route,
  BrowserRouter,
} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/continente/:handle' component={Continente} />
        </Switch>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);