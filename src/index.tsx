import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";

// applyMiddeware : 스토어에 미들웨어를 적용하는 함수 (만약 여러개라면? -> 괄호 안에
//루트 리듀서를 불러와서 이를 통해 새로운 스토어를 만들고, provider를 만들어 플젝에 적용

ReactDOM.render(
  <BrowserRouter>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </BrowserRouter>,
  document.getElementById("root")
);
