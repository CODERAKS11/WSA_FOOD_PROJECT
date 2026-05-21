import React from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";
import { Toaster } from "react-hot-toast";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";

const apiBaseUrl = process.env.REACT_APP_API_URL?.replace(/\/+$/, "");

if (apiBaseUrl) {
  axios.defaults.baseURL = apiBaseUrl;
  axios.defaults.withCredentials = true;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <Toaster
        position="bottom-center"
        toastOptions={{ duration: 5000 }}
      />
      <App />
    </React.StrictMode>
  </Provider>
);
