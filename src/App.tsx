import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import LabelingDetailPage from "./pages/LabelingDetailPage";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/labeling/detail" element={<LabelingDetailPage />} />
    </Routes>
  );
}

export default App;
