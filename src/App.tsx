import { useAxiosInterceptor } from "hooks/useAxiosInterceptors";
import React from "react";
import { useRecoilState } from "recoil";
import "./App.css";
import AppRouter from "./AppRouter";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import { LoginState } from "./states/LoginState";

function App() {
  const [AuthState, setAuthState] = useRecoilState(LoginState);
  useAxiosInterceptor(AuthState, setAuthState); // AxiosInterceptor 선언

  return (
    <>
      <NavBar />
      <AppRouter isLoggedIn={AuthState.authenticated} />
      <Footer />
    </>
  );
}

export default App;
