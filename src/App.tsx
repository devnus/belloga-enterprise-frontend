import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import LabelingDetailPage from "./pages/LabelingDetailPage";
import LoginPage from "./pages/SignInPage";
import MainPage from "./pages/MainPage";
import SignUpPage from "./pages/SignUpPage";
import CreateLabelingRequestPage from "./pages/CreateLabelingRequestPage";
import LabelingListPage from "./pages/LabelingListPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/signIn" element={<LoginPage />} />
      <Route path="/signUp" element={<SignUpPage />} />
      <Route path="/labeling/detail" element={<LabelingDetailPage />} />
      <Route path="/labeling/request" element={<CreateLabelingRequestPage />} />
      <Route path="/labeling/list" element={<LabelingListPage />} />
    </Routes>
  );
}

export default App;
