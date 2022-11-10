import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "./pages/SignInPage";
import MainPage from "./pages/MainPage";
import SignUpPage from "./pages/SignUpPage";
import CreateLabelingRequestPage from "./pages/CreateLabelingRequestPage";
import LabelingListPage from "./pages/LabelingListPage";
import MobilePrivacyPolicy from "./pages/MobilePrivacyPolicy";
import NotApprovedProjectDetailPage from "pages/ProjectDetailPages/NotApprovedProjectDetailPage";
import ProcessingProjectDetailPage from "pages/ProjectDetailPages/ProcessingProjectDetailPage";
import CompletedProjectDetailPage from "./pages/ProjectDetailPages/CompletedProjectDetailPage";

function AppRouter({ isLoggedIn = false }) {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/privacy/mobile" element={<MobilePrivacyPolicy />} />
      <Route path="*" element={<Navigate to="/" replace />} />

      {isLoggedIn === true ? (
        <>
          {/* 로그인이 된 경우 */}
          <Route
            path="/labeling/detail/:id"
            element={<ProcessingProjectDetailPage />}
          />
          <Route
            path="/labeling/waiting/detail/:id"
            element={<NotApprovedProjectDetailPage />}
          />
          <Route
            path="/labeling/completed/detail/:id"
            element={<CompletedProjectDetailPage />}
          />
          <Route
            path="/labeling/request"
            element={<CreateLabelingRequestPage />}
          />
          <Route path="/labeling/list" element={<LabelingListPage />} />
        </>
      ) : (
        <>
          {/* 로그인이 안된 경우 */}
          <Route path="/signUp" element={<SignUpPage />} />
          <Route path="/signIn" element={<LoginPage />} />
          <Route
            path="/labeling/completed/detail/:id"
            element={<CompletedProjectDetailPage />}
          />
        </>
      )}
    </Routes>
  );
}

export default AppRouter;
