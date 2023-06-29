import React from "react";
import {Route, Routes } from "react-router-dom";
import Register from "../pages/Register";
import Login from "../pages/Login";
import ResetPassword from "../pages/ResetPassword";
import ScrollTop from "../components/ScrollTop";
import Routegaurd from "../components/Routegaurd";
import Dashboard from "../pages/Dashboard";
import CreateCourse from "../pages/CreateCourse";
import Error from "../pages/Error";
import Calender from "../components/Calender/Calender";
import Profile from "../components/Profile/Profile";
import StudentTable from "../components/StudentTable";
import TeacherTable from "../components/TeacherTable";
import CourseTable from "../components/CourseTable";
import Theme from "../components/Theme";
import Detail from "../components/Detail";

const Path = () => {
  return (
    <div>
      <ScrollTop/>
      <Theme />
      <Routes>
        <Route path="/" element={<Routegaurd><Dashboard /></Routegaurd>} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/resetPassword" element={<ResetPassword />} />
        <Route path="/createCourse" element={<CreateCourse />} />
        <Route path="/calender" element={<Calender />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/studentTable" element={<StudentTable />} />
        <Route path="/teacherTable" element={<TeacherTable />} />
        <Route path="/courseTable" element={<CourseTable />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </div>
  );
};

export default Path;
