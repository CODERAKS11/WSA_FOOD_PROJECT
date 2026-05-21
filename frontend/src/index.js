import React from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";
import App from "./App";
import { Provider } from "react-redux";
import {transitions, positions, Provider as AlertProvider} from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import store from "./store";

const apiBaseUrl = process.env.REACT_APP_API_URL?.replace(/\/+$/, "");

if (apiBaseUrl) {
  axios.defaults.baseURL = apiBaseUrl;
  axios.defaults.withCredentials = true;
}

const options = {
  position: positions.BOTTOM_CENTER,
  timeout: 5000,
  offset: '30px',
  transition: transitions.SCALE
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <AlertProvider template={AlertTemplate} {...options}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
    </AlertProvider>
  </Provider>
);
