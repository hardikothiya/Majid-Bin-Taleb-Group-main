import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./commonComponent/Header";
import {
  Artical,
  Home,
  Login,
  ContactUs,
  PracticeAreas,
  AddPhoneNum,
  AddAccount, ResetPassword, ResetPasswordSecond, SignUp, CompanySignUp,
  PhoneVerification,
  AboutUs,
  Blog,
  Consultation
} from "./components";

const ProjectRoutes = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/consultation" element={<Consultation />} />
        <Route path="/company-sign-up" element={<CompanySignUp />} />
        <Route path="/artical" element={<Artical />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/practice-areas" element={<PracticeAreas />} />
        <Route path="/add-account" element={<AddAccount />} />
        <Route path="/add-phone-num" element={<AddPhoneNum />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/reset-password-second" element={<ResetPasswordSecond />} />
        <Route path="/phone-verification" element={<PhoneVerification />} />
      </Routes>
    </Router>
  );
};

export default ProjectRoutes;
