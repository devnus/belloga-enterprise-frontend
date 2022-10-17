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

  const location = useLocation();

  const [isAuthPage, setIsAuthPage] = useState<boolean>(true);
  const [isMyPage, setIsMyPage] = useState<boolean>(true);

  useEffect(() => {
    if (location.pathname === ("/signUp" || "/signIn")) {
      setIsAuthPage(() => false);
    } else if (location.pathname === "/labeling/list") {
      setIsMyPage(() => false);
    } else {
      setIsAuthPage(() => true);
      setIsMyPage(() => true);
    }
  }, [location]);

  return (
    <>
      <NavBar isAuthPage={isAuthPage} isMyPage={isMyPage} />
      <AppRouter isLoggedIn={isLoggedIn} />
      <Footer />
    </>
  );
}

export default App;
