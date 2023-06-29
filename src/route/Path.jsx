import React from "react";
import {Route, Routes } from "react-router-dom";
import Register from "../pages/Register";
import Login from "../pages/Login";
import ResetPassword from "../pages/ResetPassword";
import ScrollTop from "../components/ScrollTop";
import Routegaurd from "../components/Routegaurd";
import Home from "../pages/Home";


const Path = () => {
  return (
    <div>
      <ScrollTop/>
      <Routes>
        <Route path="/" element={<Routegaurd><Home /></Routegaurd>} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/resetPassword" element={<ResetPassword />} />
      </Routes>
    </div>
  );
};

export default Path;
