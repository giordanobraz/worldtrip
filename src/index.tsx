/* eslint-disable react/jsx-no-undef */
import { ChakraProvider } from "@chakra-ui/react"
import { Home } from "./pages/Home";
import { theme } from "./styles/theme";
import React from 'react';
import ReactDOM from 'react-dom';
import {
  Switch,
  Route,
  BrowserRouter,
} from "react-router-dom";
import { Continente } from "./pages/continentes/[slug]";




ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/continente/:handle' >
            <Continente />
          </Route>
        </Switch>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);