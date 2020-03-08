import React from "react";
import Routes from "config/Routes";
import { Provider } from "react-redux";
import store from "config/store";

export default function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}
