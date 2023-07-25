import React, { useState } from "react";
import { TfiUser } from "react-icons/tfi";
import { HiOutlineMailOpen } from "react-icons/hi";
import { LuEdit } from "react-icons/lu";
import { FaUserAlt } from "react-icons/fa";
import {
  AiFillSetting,
  AiFillEye,
  AiOutlineClockCircle,
  AiOutlineClose,
} from "react-icons/ai";
import { CiCircleAlert } from "react-icons/ci";
import "./Profile.css";
const ProfileRight = () => {
  const [open, setOpen] = useState(0);
  const [close, setClose] = useState(false);
  let bgtexture = JSON.parse(localStorage.getItem("bgTexture"));
  return (
    <div className=" w-full h-auto last:lg:p-5 flex justify-center items-center  overflow-hidden">
      <div
        className={`h-[95%] w-full justify-center   rounded lg:p-5 ${
          bgtexture?.white ? "bg-white shadow-lg" : "bgTransparent"
        }`}>
        {/* header${bgtextur?.white?"titleBlack":"title"} */}
        <div className="flex  justify-between items-center  borderCustom">
          <div
            onClick={() => setOpen(0)}
            className={` w-1/3 ${
              bgtexture?.white
                ? "titleBlack border-b-blue-600"
                : "title border-b-orange-500"
            } flex  gap-y-2 
             flex-col justify-center items-center ${
               open == 0 ? "border-b-2" : ""
             } py-5 `}>
            <TfiUser
              className={` cursor-pointer ${
                bgtexture?.white ? "titleBlack " : "title"
              }  ${
                open == 0 && bgtexture?.white
                  ? "text-blue-500"
                  : open == 0 && "text-orange-500"
              } `}
            />
            <p
              className={`hidden cursor-pointer md:block lg:block  ${
                bgtexture?.white ? "titleBlack" : "title"
              } ${
                open == 0 && bgtexture?.white
                  ? "text-blue-500"
                  : open == 0 && "text-orange-500"
              } `}>
              PROFILE
            </p>
          </div>
          <div
            onClick={() => setOpen(1)}
            className={` w-1/3 ${
              bgtexture?.white
                ? "titleBlack border-b-blue-500"
                : "title border-b-orange-500"
            } flex  gap-y-2   flex-col justify-center items-center ${
              open == 1 ? "border-b-2" : ""
            } py-5 `}>
            <HiOutlineMailOpen
              className={` cursor-pointer ${
                bgtexture?.white ? "titleBlack " : "title"
              }  ${
                open == 1 && bgtexture?.white
                  ? "text-blue-500"
                  : open == 1 && "text-orange-500"
              } `}
            />
            <p
              className={`hidden md:block cursor-pointer lg:block  ${
                bgtexture?.white ? "titleBlack" : "title"
              } ${
                open == 1 && bgtexture?.white
                  ? "text-blue-500"
                  : open == 1 && "text-orange-500"
              } `}>
              MESSAGE
            </p>
          </div>
          <div
            onClick={() => setOpen(2)}
            className={` w-1/3 ${
              bgtexture?.white
                ? "titleBlack border-b-blue-500"
                : "title border-b-orange-500"
            } flex gap-y-2   flex-col justify-center items-center ${
              open == 2 ? "border-b-2" : ""
            } py-5 `}>
            <LuEdit
              className={` cursor-pointer ${
                bgtexture?.white ? "titleBlack " : "title"
              }  ${
                open == 2 && bgtexture?.white
                  ? "text-blue-500"
                  : open == 2 && "text-orange-500"
              } `}
            />
            <p
              className={`hidden md:block cursor-pointer lg:block  ${
                bgtexture?.white ? "titleBlack" : "title"
              } ${
                open == 2 && bgtexture?.white
                  ? "text-blue-500"
                  : open == 2 && "text-orange-500"
              } `}>
              EDIT
            </p>
          </div>
        </div>
        {/* Profile */}
        <div
          className={` ${
            open == 0 ? "flex" : "hidden"
          } w-full h-full justify-between items-center flex-wrap p-3`}>
          <div className=" lg:w-1/2 md:w-1/2 w-full   flex flex-col gap-y-3">
            <h4
              className={`${
                bgtexture?.white ? "titleBlack" : "title"
              } text-lg `}>
              User Profile
            </h4>
            <div className=" flex flex-col gap-y-2">
              <h5 className={`${bgtexture?.white ? "titleBlack" : "title"} `}>
                About
              </h5>
              <p
                className={`${
                  bgtexture?.white ? "subtitleBlack" : "subtitle"
                }`}>
                Web Designer, UI/UX Engineer
              </p>
            </div>
            <div className=" flex flex-col gap-y-2">
              <h5
                className={`${
                  bgtexture?.white ? "titleBlack text-black" : "title"
                } `}>
                Hobbies
              </h5>
              <p
                className={`${
                  bgtexture?.white ? "subtitleBlack" : "subtitle"
                }`}>
                Indie music, skiing and hiking. I love the great outdoors.
              </p>
            </div>
          </div>
          <div className=" lg:w-1/2 md:w-1/2 w-full    flex lg:justify-center md:justify-center ">
            <div className=" w-[80%]">
              <div className={`${bgtexture?.white ? "titleBlack" : "title"}`}>
                Recent Badges
              </div>
              <div className=" flex flex-wrap gap-2 borderCustom py-3 ">
                <small className=" bg-black text-white rounded-lg px-2">
                  Html5
                </small>
                <small className=" bg-black text-white rounded-lg px-2">
                  Js
                </small>
                <small className=" bg-black text-white rounded-lg px-2">
                  jQuery
                </small>
                <small className=" bg-black text-white rounded-lg px-2">
                  Css
                </small>
                <small className=" bg-black text-white rounded-lg px-2">
                  Angular
                </small>
                <small className=" bg-black text-white rounded-lg px-2">
                  java
                </small>
                <small className=" bg-black text-white rounded-lg px-2">
                  Bootstrap
                </small>
                <small className=" bg-black text-white rounded-lg px-2">
                  responsive-design
                </small>
                <small className=" bg-black text-white rounded-lg px-2">
                  chatGPT
                </small>
              </div>
              <div className=" flex flex-wrap gap-2 items-center py-3 ">
                <div className=" bg-blue-600 rounded px-2 flex items-center justify-center gap-1">
                  <FaUserAlt className=" text-sm text-[#ffffffd9]" />
                  <p className="  text-sm text-[#ffffffd9]">900 Followers</p>
                </div>
                <div className=" bg-green-600 rounded px-2 flex items-center justify-center gap-1">
                  <AiFillSetting className=" text-sm text-[#ffffffd9]" />
                  <p className="  text-sm text-[#ffffffd9]">43 forks</p>
                </div>
                <div className=" bg-red-600 rounded px-2 flex items-center justify-center gap-1">
                  <AiFillEye className=" text-sm text-[#ffffffd9]" />
                  <p className="  text-sm text-[#ffffffd9]">234 views</p>
                </div>
              </div>
            </div>
          </div>
          <div className="  w-full   ">
            {/* title */}
            <div className=" w-full">
              <div className=" flex justify-between w-full items-center py-[15px]">
                <h4
                  className={`${
                    bgtexture?.white ? "titleblack" : " title "
                  } text-lg`}>
                  Recent Activity
                </h4>
                <div className=" w-[5%]">
                  <AiOutlineClockCircle className=" text-xl title" />
                </div>
              </div>
            </div>
            <ul className=" list">
              <li
                className={`${
                  bgtexture?.white ? "subtitleBlack " : "subtitle"
                }`}>
                <strong>Abby</strong> joined ACME Project Team in
                `Collaboration`
              </li>
              <li
                className={`${
                  bgtexture?.white ? "subtitleBlack li" : "subtitle"
                }`}>
                <strong>Gary </strong>deleted My Board1 in `Discussions`
              </li>
              <li
                className={`${
                  bgtexture?.white ? "subtitleBlack li" : "subtitle"
                }`}>
                <strong>Kensington </strong> deleted MyBoard3 in `Discussions`
              </li>
              <li
                className={`${
                  bgtexture?.white ? "subtitleBlack li" : "subtitle"
                }`}>
                <strong>John</strong> deleted My Board1 in `Discussions`
              </li>
              <li
                className={`${
                  bgtexture?.white ? "subtitleBlack li" : "subtitle"
                }`}>
                <strong>Skell</strong> deleted his post Look at Why this is.. in
                `Discussions`
              </li>
            </ul>
          </div>
        </div>

        <div className={`p-3 w-full ${open == 1 ? "" : "hidden"}`}>
          {/* title */}
          <div
            className={`${
              close == true ? "hidden" : ""
            } w-full bg-teal-600 px-5 rounded`}>
            <div className=" flex justify-between w-full items-center py-[15px]">
              <CiCircleAlert className="text-xl title" />
              <h4 className=" title text-lg w-[60%]">
                Info! Lorem Ipsum is simply dummy text.
              </h4>
              <div onClick={() => setClose(!close)} className="">
                <AiOutlineClose className=" text-xl title" />
              </div>
            </div>
          </div>
          <ul className=" list">
            <li
              className={`${bgtexture?.white ? "subtitleBlack " : "subtitle"}`}>
              <strong>Abby</strong> joined ACME Project Team in `Collaboration`
            </li>
            <li
              className={`${
                bgtexture?.white ? "subtitleBlack li" : "subtitle"
              }`}>
              <strong>Gary </strong>deleted My Board1 in `Discussions`
            </li>
            <li
              className={`${
                bgtexture?.white ? "subtitleBlack li" : "subtitle"
              }`}>
              <strong>Kensington </strong> deleted MyBoard3 in `Discussions`
            </li>
            <li
              className={`${
                bgtexture?.white ? "subtitleBlack li" : "subtitle"
              }`}>
              <strong>John</strong> deleted My Board1 in `Discussions`
            </li>
            <li
              className={`${
                bgtexture?.white ? "subtitleBlack li" : "subtitle"
              }`}>
              <strong>Skell</strong> deleted his post Look at Why this is.. in
              `Discussions`
            </li>
          </ul>
        </div>

        <div className={`p-3 w-full ${open == 2 ? "" : "hidden"} `}>
          <form id="formProfileChange" className=" flex flex-col gap-y-4">
            {/* firstName */}
            <div className=" flex justify-between items-center flex-col lg:flex-row md:flex-row">
              <label
                className={` ${bgtexture?.white ? "titleBlack" : "title"}`}>
                First Name
              </label>
              <input
                type="text"
                className=" w-[75%] py-2 formInputColor placeholder-slate-200 rounded outline-none cursor-text px-4 hover:outline-slate-400"
                placeholder=" John "
              />
            </div>
            {/* lastName */}
            <div className=" flex justify-between items-center  flex-col lg:flex-row md:flex-row">
              <label
                className={` ${bgtexture?.white ? "titleBlack" : "title"}`}>
                Last Name
              </label>
              <input
                type="text"
                className=" w-[75%] py-2 formInputColor placeholder-slate-200 rounded outline-none cursor-text px-4 hover:outline-slate-400
                "
                placeholder=" Sakura "
              />
            </div>
            {/* Email */}
            <div className=" flex justify-between items-center  flex-col lg:flex-row md:flex-row">
              <label
                className={` ${bgtexture?.white ? "titleBlack" : "title"}`}>
                Email
              </label>
              <input
                type="email"
                className=" w-[75%] py-2 formInputColor placeholder-slate-200 rounded outline-none cursor-text px-4 hover:outline-slate-400
                "
                placeholder=" John@gmail.com "
              />
            </div>
            {/* ChangeProfile */}
            <div className=" flex justify-between items-center  flex-col lg:flex-row md:flex-row">
              <label
                className={` ${bgtexture?.white ? "titleBlack" : "title"}`}>
                Change Profile
              </label>
              <input
                type="file"
                className="  w-[75%] py-2 formInputColor placeholder-slate-200 rounded outline-none cursor-text px-4 hover:outline-slate-400
                "
              />
            </div>
            {/* Website */}
            <div className=" flex justify-between items-center  flex-col lg:flex-row md:flex-row">
              <label
                className={` ${bgtexture?.white ? "titleBlack" : "title"}`}>
                Website
              </label>
              <input
                type="text"
                className=" w-[75%] py-2 formInputColor placeholder-slate-200 rounded outline-none cursor-text px-4 hover:outline-slate-400
                "
                placeholder="  "
              />
            </div>
            {/* Address */}
            <div className=" flex justify-between lg:items-start md:items-start items-center flex-wrap  flex-col lg:flex-row md:flex-row">
              <label
                className={` ${bgtexture?.white ? "titleBlack" : "title"}`}>
                Address
              </label>
              <div className="w-[75%] flex justify-between items-center flex-wrap gap-y-4">
                <input
                  type="text"
                  className=" w-full  py-2 formInputColor placeholder-slate-200 rounded outline-none cursor-text px-4 hover:outline-slate-400
                "
                  placeholder=" Street"
                />
                <input
                  type="text"
                  className=" lg:w-[60%] md:w-[60%] w-full py-2 formInputColor placeholder-slate-200 rounded outline-none cursor-text px-4 hover:outline-slate-400
                "
                  placeholder=" City "
                />
                <input
                  type="text"
                  className=" lg:w-[37%] md:w-[37%] w-full py-2 formInputColor placeholder-slate-200 rounded outline-none cursor-text px-4 hover:outline-slate-400
                "
                  placeholder=" State "
                />
              </div>
            </div>
            {/* UserName */}
            <div className=" flex justify-between items-center  flex-col lg:flex-row md:flex-row">
              <label
                className={` ${bgtexture?.white ? "titleBlack" : "title"}`}>
                User Name
              </label>
              <input
                type="text"
                className=" w-[75%] py-2 formInputColor placeholder-slate-200 rounded outline-none cursor-text px-4 hover:outline-slate-400
                "
                placeholder=" UserName "
              />
            </div>
            {/* PAssword */}
            <div className=" flex justify-between items-center  flex-col lg:flex-row md:flex-row">
              <label
                className={`placeholderC  ${
                  bgtexture?.white ? "titleBlack" : "title"
                }`}>
                Password
              </label>
              <input
                type="password"
                className=" placeholderC  w-[75%] py-2 formInputColor placeholder-slate-200 rounded outline-none cursor-text px-4 hover:outline-slate-400
                "
                placeholder="........"
              />
            </div>
            {/*Comfiem PAssword */}
            <div className=" flex justify-between items-center  flex-col lg:flex-row md:flex-row">
              <label className={`${bgtexture?.white ? "titleBlack" : "title"}`}>
                Comfirm Password
              </label>
              <input
                type="password"
                className="placeholderC  w-[75%] py-2 formInputColor placeholder-slate-200 rounded outline-none cursor-text px-4 hover:outline-slate-400
                "
                placeholder="........"
              />
            </div>
            <div className="w-[75%] flex justify-center gap-6 ">
              <div
                type="submit"
                className="select-none hover:bg-blue-950 py-2 px-4 bg-blue-900 title rounded inline-block"
                form="formProfileChange">
                Save Change
              </div>
              <div className="select-none py-2 px-4 hover:bg-rose-950  bg-rose-900 title rounded inline-block">
                Cancel
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfileRight;
