import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import ResumeTemplates from "../pages/ResumeTemplates/ResumeTemplates";
import ResumeBuilder from "../pages/ResumeBuilder/ResumeBuilder";
import CreateBuilder from "../pages/CreateBuilder/CreateBuilder";
// import LoginPage from "../pages/Account/Login/Login";
// import Register from "../pages/Account/Register/Register";
// import ForgotPassword from "../pages/Account/ForgotPassword/ForgotPassword";
// import ResetPassword from "../pages/Account/ChangePassword/ChangePassword";

const AuthRoutes = () => {
  return (
    <Routes>
      <Route index element={<Home />}></Route>
      <Route path="/resume-templates" element={<ResumeTemplates />}></Route>
      <Route path="/make-resume" element={<ResumeBuilder />}></Route>
      <Route path="/create-builder" element={<CreateBuilder />}></Route>
      {/* <Route path="/account/login" element={<LoginPage />} /> */}
      {/* <Route path="/account/register" element={<Register />} /> */}
      {/* <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password/:token" element={<ResetPassword />} /> */}
    </Routes>
  );
};

export default AuthRoutes;
