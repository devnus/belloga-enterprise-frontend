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

  useEffect(() => {
    if (localStorage.getItem("belloga-page")) setIsLoggedIn(true);
  });

  return (
    <>
      <NavBar />
      <AppRouter isLoggedIn={isLoggedIn} />
      <Footer />
    </>
  );
}

export default App;
