import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import "./Globalstyle.css";
import App from "./App";
import store from "store/index";

import "./index.css";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById("root")
);
