// src/store/store.js
import { configureStore } from "@reduxjs/toolkit";
import snackbarReducer from "./snackbarSlice.js";
import activeUserReducer from "./activeUserSlice.js";

const store = configureStore({
  reducer: {
    snackbar: snackbarReducer,
    activeUser: activeUserReducer,
  },
});

export default store;
