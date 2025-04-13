import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import ResumeTemplates from "../pages/ResumeTemplates/ResumeTemplates";
import ResumeBuilder from "../pages/ResumeBuilder/ResumeBuilder";
import CreateBuilder from "../pages/CreateBuilder/CreateBuilder";
import Pricing from "../pages/Pricing/Pricing";
import AccountLogin from "../pages/Account/AccountLogin/AccountLogin";
import Register from "../pages/Account/Register/Register";
import ForgotPassword from "../pages/Account/ForgotPassword/ForgotPassword";
// import ResetPassword from "../pages/Account/ChangePassword/ChangePassword";

const AuthRoutes = () => {
  return (
    <Routes>
      <Route index element={<Home />}></Route>
      <Route path="/resume-templates" element={<ResumeTemplates />}></Route>
      <Route path="/make-resume" element={<ResumeBuilder />}></Route>
      <Route path="/create-builder" element={<CreateBuilder />}></Route>
      <Route path="/pricing" element={<Pricing />}></Route>
      <Route path="/account/login" element={<AccountLogin />} />
      <Route path="/account/register" element={<Register />} />
      <Route path="/account/forgot-password" element={<ForgotPassword />} />
      {/* <Route path="/account/reset-password/:token" element={<ResetPassword />} /> */}
    </Routes>
  );
};

export default AuthRoutes;
