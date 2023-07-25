import React, { useEffect, useState } from "react";
import {
  AiOutlineAppstore,
  AiOutlineUnorderedList,
  AiOutlineCalendar,
  AiOutlineTable,
  AiOutlineLock,
} from "react-icons/ai";
import { BsBoxArrowLeft } from "react-icons/bs";
import { RiContactsLine } from "react-icons/ri";
import { GiNewspaper } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import { Link, NavLink } from "react-router-dom";
import "./sidebar.css";

const Sidebar = ({ isOpen, isScrolled, toggleSidebar }) => {
  let bgTexture = JSON.parse(localStorage.getItem("bgTexture"));

  // const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // useEffect(() => {
  //   const handleResize = () => {
  //     setWindowWidth(window.innerWidth);
  //   };

  //   window.addEventListener("resize", handleResize);

  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  // useEffect(() => {
  //   if (windowWidth <= 900 ) {
  //     toggleSidebar(false);
  //   }
  //   if (windowWidth >= 910) {
  //     toggleSidebar(true);
  //   }
  // }, [windowWidth]);
  const handleClick = (event) => {
    event.stopPropagation();
  };

  return (
    <aside
      className={` h-screen ${bgTexture?.white ? "bg-[#fff]" : "bg-black lg:bg-opacity-20 bg-opacity-100"}  z-50 w-[230px] flex flex-col fixed ${
        isOpen ? " left-0 opacity-100" : " left-[-300px] opacity-0"
      }  transition-all ease-in duration-[330ms]`}>
      {/* Sidebar content */}
      <div
        className={`sidebar-item flex gap-14 items-center ps-5 py-5 h-[65px] transition-all ease-in duration-300
        ${bgTexture?.white && "bg-[#fff] " }
        ${isScrolled ? "bg-black" : "bg-black bg-opacity-30"} 
        `}>
         {/* ${isScrolled ? " bg-black" : "bg-black bg-opacity-30"}  */}
        <Link to={"/"} className=" ">
          <img
            className=" sidebar-item"
            onClick={handleClick}
            src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2023/01/logo-2.png"
            alt=""
          />
          {/* <p className=" text-[#ffffffa6] text-lg font-bold ">Edu-Pro</p> */}
        </Link>

        <p onClick={toggleSidebar}>
          <BsBoxArrowLeft className={`${bgTexture?.white ? " group-hover:text-[#fff]" : "text-[#ffffffa6] group-hover:text-[#ffffff]"} cursor-pointer closeBtn text-2xl mr-5 `} />
        </p>
      </div>
      <hr className=" bg-slate-500 border-0 py-[0.2px] " />
      {/* main navigation  */}
      <div className=" flex flex-col gap-4 mt-4 pb-[50px] sidebar-item">
        <p className={`${bgTexture?.white ? "text-[#1f1f1e]" : "text-[#ffffffa6]"}  text-[12px] uppercase ms-4`}>
          main navigation
        </p>
        <p className={`${bgTexture?.white ? "navItem2" : "navItem"}`}>
          <NavLink
            to={'/'}
            className={`${bgTexture?.white ? "hover:bg-[#525fe1]" : "hover:bg-[#ffffff33] hover:border-s-2"} w-full sidebar-item group flex items-center gap-3  ps-3 py-2 `}>
            <p className={`${bgTexture?.white ? " group-hover:text-[#fff]" : "text-[#ffffffa6] group-hover:text-[#ffffff]"} text-xl `}>
              <AiOutlineAppstore />
            </p>
            <p className={` ${bgTexture?.white ? " group-hover:text-[#fff]" : "text-[#ffffffa6] group-hover:text-[#ffffff]"} text-[15px] `}>
              Dashboard
            </p>
          </NavLink>
        </p>
        <p className={`${bgTexture?.white ? "navItem2" : "navItem"}`} >
          <NavLink
            to={'/createCourse'}
            className={`group ${bgTexture?.white ? "hover:bg-[#525fe1]" : "hover:bg-[#ffffff33] hover:border-s-2"} w-full flex items-center gap-3 ps-3 py-2 `}>
            <p className={`${bgTexture?.white ? " group-hover:text-[#fff]" : "text-[#ffffffa6] group-hover:text-[#ffffff]"} text-xl`}>
              <AiOutlineUnorderedList />
            </p>
            <p className={`${bgTexture?.white ? " group-hover:text-[#fff]" : "text-[#ffffffa6] group-hover:text-[#ffffff]"} text-[15px]`}>
              Create Course
            </p>
          </NavLink>
        </p>
        <p className={`${bgTexture?.white ? "navItem2" : "navItem"}`} >
        <NavLink
            to={'/calender'}
            className={`${bgTexture?.white ? "hover:bg-[#525fe1]" : "hover:bg-[#ffffff33] hover:border-s-2"} group w-full flex items-center gap-3 ps-3 py-2 `}>
            <p className={`${bgTexture?.white ? " group-hover:text-[#fff]" : "text-[#ffffffa6] group-hover:text-[#ffffff]"} text-xl `}>
              <AiOutlineCalendar />
            </p>

            <span className={`${bgTexture?.white ? " group-hover:text-[#fff]" : "text-[#ffffffa6] group-hover:text-[#ffffff]"} text-[15px]`}>
              Calender
            </span>
          </NavLink>
        </p>
        <p className={`${bgTexture?.white ? "navItem2" : "navItem"}`} >
          <NavLink
            to={'/profile'}
            className={`${bgTexture?.white ? "hover:bg-[#525fe1]" : "hover:bg-[#ffffff33] hover:border-s-2"} group w-full flex items-center gap-3 ps-3 py-2 `}>
            <p className={`${bgTexture?.white ? " group-hover:text-[#fff]" : "text-[#ffffffa6] group-hover:text-[#ffffff]"} text-xl `}>
              <RiContactsLine />
            </p>

            <span className={`${bgTexture?.white ? " group-hover:text-[#fff]" : "text-[#ffffffa6] group-hover:text-[#ffffff]"} text-[15px]`}>
              Profile
            </span>
          </NavLink>
        </p>

        <hr className=" bg-slate-500 border-0 py-[0.2px] " />

        <p className=" text-[#ffffffa6] text-[12px] uppercase ms-4">Tables</p>
        <p className={`${bgTexture?.white ? "navItem2" : "navItem"}`} >
          <NavLink
            to={'/studentTable'}
            className={`${bgTexture?.white ? "hover:bg-[#525fe1]" : "hover:bg-[#ffffff33] hover:border-s-2"} group  w-full flex items-center gap-3 ps-3 py-2 `}>
            <p className={`${bgTexture?.white ? " group-hover:text-[#fff]" : "text-[#ffffffa6] group-hover:text-[#ffffff]"} text-xl `}>
              <CgProfile />
            </p>
            <span className={`${bgTexture?.white ? " group-hover:text-[#fff]" : "text-[#ffffffa6] group-hover:text-[#ffffff]"} text-[15px]`}>
              Students List
            </span>
          </NavLink>
        </p>
        <p className={`${bgTexture?.white ? "navItem2" : "navItem"}`} >
          <NavLink
            to={'/teacherTable'}
            className={`${bgTexture?.white ? "hover:bg-[#525fe1]" : "hover:bg-[#ffffff33] hover:border-s-2"} group w-full flex items-center gap-3 ps-3 py-2 `}>
            <p className={`${bgTexture?.white ? " group-hover:text-[#fff]" : "text-[#ffffffa6] group-hover:text-[#ffffff]"} text-xl `}>
              <AiOutlineTable />
            </p>
            <span className={`${bgTexture?.white ? " group-hover:text-[#fff]" : "text-[#ffffffa6] group-hover:text-[#ffffff]"} text-[15px]`}>
              Teacher List
            </span>
          </NavLink>
        </p>
        <p className={`${bgTexture?.white ? "navItem2" : "navItem"}`} >
          <NavLink
            to={'/courseTable'}
            className={`${bgTexture?.white ? "hover:bg-[#525fe1]" : "hover:bg-[#ffffff33] hover:border-s-2"} group w-full flex items-center gap-3 ps-3 py-2 `}>
            <p className={`${bgTexture?.white ? " group-hover:text-[#fff]" : "text-[#ffffffa6] group-hover:text-[#ffffff]"} text-xl `}>
              <GiNewspaper />
            </p>
            <span className={`${bgTexture?.white ? " group-hover:text-[#fff]" : "text-[#ffffffa6] group-hover:text-[#ffffff]"} text-[15px]`}>
              Course List
            </span>
          </NavLink>
        </p>
      </div>
    </aside>
  );
};

export default Sidebar;
