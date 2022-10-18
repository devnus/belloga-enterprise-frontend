import { Interceptor } from "apis/tokenInterceptor";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useRecoilState } from "recoil";
import "./App.css";
import AppRouter from "./AppRouter";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import { LoginState } from "./states/LoginState";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(LoginState);

  return (
    <>
      <Interceptor>
        <NavBar />
        <AppRouter isLoggedIn={isLoggedIn} />
        <Footer />
      </Interceptor>
    </>
  );
}

export default App;
