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
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (windowWidth <= 900 ) {
      toggleSidebar(false);
    }
    if (windowWidth >= 910) {
      toggleSidebar(true);
    }
  }, [windowWidth]);
  const handleClick = (event) => {
    event.stopPropagation();
  };
  return (
    <aside
      className={` h-screen bg-black lg:bg-opacity-20 z-50 bg-opacity-100 w-[230px] flex flex-col fixed ${
        isOpen ? " left-0 opacity-100" : " left-[-300px] opacity-0"
      }  transition-all ease-in duration-[330ms]`}>
      {/* Sidebar content */}
      <div
        className={`sidebar-item flex gap-14 items-center ps-5 py-5 h-[65px] transition-all ease-in duration-300
      ${isScrolled ? " bg-black" : "bg-black bg-opacity-30"} `}>
        <Link to={"/"} className=" flex items-center gap-4">
          <img
            className=" sidebar-item w-12"
            onClick={handleClick}
            src="https://themewagon.github.io/dashtreme/assets/images/logo-icon.png"
            alt=""
          />
          <p className=" text-[#ffffffa6] text-lg font-bold ">Edu-Pro</p>
        </Link>

        <p onClick={toggleSidebar}>
          <BsBoxArrowLeft className=" text-[#ffffffa6]  hover:text-[#ffffff] cursor-pointer closeBtn text-2xl" />
        </p>
      </div>
      <hr className=" bg-slate-500 border-0 py-[0.2px] " />
      {/* main navigation  */}
      <div className=" flex flex-col gap-4 mt-4 pb-[50px] sidebar-item">
        <p className=" text-[#ffffffa6] text-[12px] uppercase ms-4">
          main navigation
        </p>
        <p id="navItem" className="">
          <NavLink
            to={"/"}
            onClick={handleClick}
            className=" sidebar-item group flex items-center gap-3 hover:bg-[#ffffff33] hover:border-s-2 ps-3 py-2 ">
            <p className=" text-[#ffffffa6] text-xl group-hover:text-[#ffffff]">
              <AiOutlineAppstore />
            </p>
            <p className=" text-[#ffffffa6] text-[15px] group-hover:text-[#ffffff]">
              Dashboard
            </p>
          </NavLink>
        </p>
        <p id="navItem" className="sidebar-item">
          <NavLink
            to={"/createCourse"}
            onClick={handleClick}
            className=" group flex items-center gap-3 hover:bg-[#ffffff33] hover:border-s-2 ps-3 py-2 ">
            <p className=" text-[#ffffffa6] text-xl group-hover:text-[#ffffff]">
              <AiOutlineUnorderedList />
            </p>
            <p className=" text-[#ffffffa6] text-[15px] group-hover:text-[#ffffff]">
              Create Course
            </p>
          </NavLink>
        </p>
        <p id="navItem" className="sidebar-item">
          <NavLink
            to={"/calender"}
            onClick={handleClick}
            className=" group flex items-center gap-3 hover:bg-[#ffffff33] hover:border-s-2 ps-3 py-2 ">
            <p className=" text-[#ffffffa6] text-xl group-hover:text-[#ffffff]">
              <AiOutlineCalendar />
            </p>
            <span className=" text-[#ffffffa6] text-[15px] group-hover:text-[#ffffff]">
              Calendar
            </span>
          </NavLink>
        </p>
        <p id="navItem" className="sidebar-item">
          <NavLink
            to={"/profile"}
            onClick={handleClick}
            className=" group flex items-center gap-3 hover:bg-[#ffffff33] hover:border-s-2 ps-3 py-2 ">
            <p className=" text-[#ffffffa6] text-xl group-hover:text-[#ffffff]">
              <RiContactsLine />
            </p>

            <span className=" text-[#ffffffa6] text-[15px] group-hover:text-[#ffffff]">
              Profile
            </span>
          </NavLink>
        </p>
        <p id="navItem" className="sidebar-item">
          <NavLink
            to={"/login"}
            onClick={handleClick}
            className=" group flex items-center gap-3 hover:bg-[#ffffff33] hover:border-s-2 ps-3 py-2 ">
            <p className=" text-[#ffffffa6] text-xl group-hover:text-[#ffffff]">
              <AiOutlineLock />
            </p>
            <span className=" text-[#ffffffa6] text-[15px] group-hover:text-[#ffffff]">
              Login
            </span>
          </NavLink>
        </p>

        <hr className=" bg-slate-500 border-0 py-[0.2px] " />

        <p className=" text-[#ffffffa6] text-[12px] uppercase ms-4">Tables</p>
        <p id="navItem" className="sidebar-item">
          <NavLink
            to={"/studentTable"}
            onClick={handleClick}
            className=" group flex items-center gap-3 hover:bg-[#ffffff33] hover:border-s-2 ps-3 py-2 ">
            <p className=" text-[#ffffffa6] text-xl group-hover:text-[#ffffff]">
              <CgProfile />
            </p>
            <span className=" text-[#ffffffa6] text-[15px] group-hover:text-[#ffffff]">
              Students List
            </span>
          </NavLink>
        </p>
        <p id="navItem" className="sidebar-item">
          <NavLink
            to={"/teacherTable"}
            onClick={handleClick}
            className=" group flex items-center gap-3 hover:bg-[#ffffff33] hover:border-s-2 ps-3 py-2 ">
            <p className=" text-[#ffffffa6] text-xl group-hover:text-[#ffffff]">
              <AiOutlineTable />
            </p>
            <span className=" text-[#ffffffa6] text-[15px] group-hover:text-[#ffffff]">
              Teacher List
            </span>
          </NavLink>
        </p>
        <p id="navItem" className="sidebar-item">
          <NavLink
            to={"/courseTable"}
            onClick={handleClick}
            className=" group flex items-center gap-3 hover:bg-[#ffffff33] hover:border-s-2 ps-3 py-2 ">
            <p className=" text-[#ffffffa6] text-xl group-hover:text-[#ffffff]">
              <GiNewspaper />
            </p>
            <span className=" text-[#ffffffa6] text-[15px] group-hover:text-[#ffffff]">
              Course List
            </span>
          </NavLink>
        </p>
      </div>
    </aside>
  );
};

export default Sidebar;
