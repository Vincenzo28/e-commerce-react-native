import React from "react";
import MainNavigation from "./Navigation/";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./store/reducers";

const store = configureStore({ reducer: rootReducer });

export default function App() {
  return (
    <Provider store={store}>
      <MainNavigation />
    </Provider>
  );
}
