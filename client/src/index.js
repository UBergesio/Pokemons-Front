import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import store from "./components/redux/store";
import { Provider } from "react-redux";
import axios from "axios";

/* axios.default.baseURL = "http://localhost:3001"; */
axios.default.baseURL = "https://pokemons-back-production-3afa.up.railway.app/";


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
