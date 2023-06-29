import React from "react";
import Progress from "../components/dashboard-componentes/Progress";
import LineChart from "../components/dashboard-componentes/LineChart";
import DoughnutChart from "../components/dashboard-componentes/DoughnutChart";
import { StateContextCustom } from "../components/context/StateContext";
import { Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Theme from "../components/Theme";
import ResetPassword from "./ResetPassword";
import CreateCourse from "./CreateCourse";
import Profile from "../components/Profile/Profile";
import Error from "./Error";
import Calender from "../components/Calender/Calender";
import StudentTable from "../components/StudentTable";
import CourseTable from "../components/CourseTable";
import TeacherTable from "../components/TeacherTable";

const Dashboard = () => {
  const { isSidebarOpen } = StateContextCustom();
  return (
    <>
    <Theme />
    <div className="flex flex-col">
      <div>
        <Navbar />
      </div>

      <div className={`mt-[52px] duration-500 ${isSidebarOpen && " ml-[230px]" } max-lg:ml-0`}>
        <div className=" flex flex-col gap-7">
              <Progress />
              <div className={`w-[95%] flex max-lg:flex-col mx-auto gap-7 mb-7`}>
                <LineChart />
                <DoughnutChart />
              </div>
        </div>
 
        {/* <Routes>
              <Route path="/createCourse" element={<CreateCourse />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="*" element={<Error />} />
              <Route path="/calender" element={<Calender />} />
              <Route path="/studentTable" element={<StudentTable />} />
              <Route path="/courseTable" element={<CourseTable />} />
              <Route path="/teacherTable" element={<TeacherTable />} />
        </Routes> */}
      </div>
      
    </div>
    </>
  );
};
export default Dashboard;
