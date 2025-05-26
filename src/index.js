import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import CartProvider from "./Store/CartProvider";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import SnackbarComponent from "./Components/SnackBarComponent/SnackBarComponent";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <CartProvider>
        <App />
        <SnackbarComponent />
      </CartProvider>
    </BrowserRouter>
  </Provider>
);
