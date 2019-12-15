import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import HomePage from "./home.page";
import { Router } from "@reach/router";
import FavPage from './fav.page';
import "./styles.css";
import { StoreProvider } from "./store";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StoreProvider>
    <Router>
      <App path="/">
        <HomePage path="/" />
        <FavPage path='/faves' />
      </App>
    </Router>
  </StoreProvider>,
  rootElement
);
