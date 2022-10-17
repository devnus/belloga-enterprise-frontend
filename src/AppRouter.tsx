import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import LabelingDetailPage from "./pages/LabelingDetailPage";
import LoginPage from "./pages/SignInPage";
import MainPage from "./pages/MainPage";
import SignUpPage from "./pages/SignUpPage";
import CreateLabelingRequestPage from "./pages/CreateLabelingRequestPage";
import LabelingListPage from "./pages/LabelingListPage";
import MobilePrivacyPolicy from "./pages/MobilePrivacyPolicy";

function AppRouter({ isLoggedIn = false }) {
  return (
    <Routes>
      {isLoggedIn === true ? (
        <>
          {/* 로그인이 된 경우 */}
          <Route path="/" element={<MainPage />} />
          <Route path="/labeling/detail/:id" element={<LabelingDetailPage />} />
          <Route
            path="/labeling/request"
            element={<CreateLabelingRequestPage />}
          />
          <Route path="/labeling/list" element={<LabelingListPage />} />
          <Route path="/privacy/mobile" element={<MobilePrivacyPolicy />} />
        </>
      ) : (
        <>
          {/* 로그인이 안된 경우 */}
          <Route path="/" element={<MainPage />} />
          <Route path="/signIn" element={<LoginPage />} />
          <Route path="/signUp" element={<SignUpPage />} />
        </>
      )}
    </Routes>
  );
}

export default AppRouter;
