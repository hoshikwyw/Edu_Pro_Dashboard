import React from 'react'
import Dashboard from './Dashboard';
import CreateCourse from './CreateCourse';
import { StateContextCustom } from "../components/context/StateContext";
import Navbar from "../components/Navbar";
import Theme from "../components/Theme";
import StudentTable from "../components/StudentTable";
import TeacherTable from "../components/TeacherTable";
import CourseTable from "../components/CourseTable";
import { useSelector } from 'react-redux';
import Calender from '../components/Calender/Calender';
import Profile from '../components/Profile/Profile';

const Home = () => {
    const { isSidebarOpen } = StateContextCustom();
    const {showComponents} = useSelector(state => state.showComponentsSlice)
    // const showComponents = localStorage.getItem("showComponents")
    // console.log(showComponents);
    return (
      <>
      <Theme />
      <div className="flex flex-col">
        <div>
          <Navbar />
        </div>
  
        <div className={`mt-[52px] duration-500 ${isSidebarOpen && " ml-[230px]" } max-lg:ml-0`}>
            <div className={`${showComponents == 0 ? "block" : "hidden"}`}>
                <Dashboard/>
            </div>

            <div className={`${showComponents == 1 ? "block" : "hidden"}`}>
                <CreateCourse/>
            </div>

            <div className={`${showComponents == 2 ? "block" : "hidden"}`}>
                <Calender/>
            </div>

            <div className={`${showComponents == 3 ? "block" : "hidden"}`}>
                <Profile/>
            </div>

            <div className={`${showComponents == 4 ? "block" : "hidden"}`}>
                <StudentTable/>
            </div>

            <div className={`${showComponents == 5 ? "block" : "hidden"}`}>
                <TeacherTable/>
            </div>

            <div className={`${showComponents == 6 ? "block" : "hidden"}`}>
                <CourseTable/>
            </div>
        </div>
        
      </div>
      </>
    );
  };

export default Home