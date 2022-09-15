import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import LabelingDetailPage from "./pages/LabelingDetailPage";
import LoginPage from "./pages/SignInPage";
import MainPage from "./pages/MainPage";
import SignUpPage from "./pages/SignUpPage";
import CreateLabelingRequestPage from "./pages/CreateLabelingRequestPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/signIn" element={<LoginPage />} />
      <Route path="/signUp" element={<SignUpPage />} />
      <Route path="/labeling/detail" element={<LabelingDetailPage />} />
      <Route path="/labeling/request" element={<CreateLabelingRequestPage />} />
    </Routes>
  );
}

export default App;
