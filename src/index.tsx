import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { worker } from "./mocks/browser";
import { RecoilRoot } from "recoil";

if (process.env.NODE_ENV === "development") {
  worker.start();
}
ReactDOM.render(
  <BrowserRouter>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </BrowserRouter>,
  document.getElementById("root")
);
