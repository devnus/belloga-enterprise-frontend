import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

import { RecoilRoot } from "recoil";
import { Provider } from "react-redux";

import store from "./store/index";

// if (process.env.NODE_ENV === "development") {
//   const { worker } = require("./mocks/browser");
//   worker.start();
// }

ReactDOM.render(
  <BrowserRouter>
    <RecoilRoot>
      <Provider store={store}>
        <App />
      </Provider>
    </RecoilRoot>
  </BrowserRouter>,
  document.getElementById("root")
);
