import React, { useEffect, useState } from "react";
import "./Table.css";
import { HiMenuAlt1 } from "react-icons/hi";
import { MdModeEdit } from "react-icons/md";
import { MdDeleteSweep } from "react-icons/md";
import courseTable from "../json/courseTable.json";
import Navbar from "./Navbar";
import { StateContextCustom } from "./context/StateContext";
import { useNavigate } from "react-router-dom";

const CourseTable = () => {
  const [courses, setCourses] = useState([]);
  const { isSidebarOpen } = StateContextCustom();
  const nav = useNavigate();
  const toDetail = () => nav("/detail");
  let bgTexture = JSON.parse(localStorage.getItem("bgTexture"));

  useEffect(() => {
    setCourses(courseTable);
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const dataPerPage = 7;
  const lastIndex = currentPage * dataPerPage;
  const firstIndex = lastIndex - dataPerPage;
  const data = courses.slice(firstIndex, lastIndex);
  const nPage = Math.ceil(courses.length / dataPerPage);
  const number = [...Array(nPage + 1).keys()].slice(1);

  const prePage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const changeCPage = (id) => {
    setCurrentPage(id);
  };
  const nextPage = () => {
    if (currentPage !== nPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="flex flex-col">
      <div>
        <Navbar/>
      </div>
      <div className={`mt-[52px] duration-500 ${isSidebarOpen && " ml-[230px]" } max-lg:ml-0`}>
        <div className="flex justify-center items-start flex-col gap-6">
          <div className={`${bgTexture?.white ? "bgTransparent2 shadow2" : "bgTransparent shadow"} w-[95%] mt-10 flex flex-col gap-3 rounded p-7 mx-auto`}>
            <h1 className={` font-medium ${bgTexture?.white ? "text-black" : " text-white"} text-lg tracking-wide`}>
              Course Table
            </h1>
            <table className={`table-responsive ${bgTexture?.white && "bg-gray-50"}`}>
              <thead className={` ${bgTexture?.white ? "text-white bg-[#525fe1]" : "border-color tableTitle"} `}>
                <tr>
                  <th className={` text-sm max-[1100px]:pr-4 tracking-wide ${bgTexture?.white ? "" : "border-color border-r"} py-4 font-medium text-start px-3`}>
                    T_ID
                  </th>
                  <th className={` text-sm max-[1100px]:pr-10 tracking-wide ${bgTexture?.white ? "" : "border-color  border-r"} py-4 font-medium text-start px-3`}>
                    COURSE NAME
                  </th>
                  <th className={` text-sm max-[1100px]:pr-10 tracking-wide ${bgTexture?.white ? "" : "border-color  border-r"} py-4 font-medium text-start px-3`}>
                    CATEGORY
                  </th>
                  <th className={` text-sm max-[1100px]:pr-7 tracking-wide ${bgTexture?.white ? "" : "border-color  border-r"} py-4 font-medium text-start px-3`}>
                    DURATION
                  </th>
                  <th className={` text-sm max-[1100px]:pr-10 tracking-wide ${bgTexture?.white ? "" : "border-color  border-r"} py-4 font-medium text-start px-3`}>
                    DESCRIPTION
                  </th>
                  <th className={` text-sm max-[1100px]:pr-5 tracking-wide ${bgTexture?.white ? "" : "border-color  border-r"} py-4 font-medium text-start px-3`}>
                    LESSON
                  </th>
                  <th className={` text-sm max-[1100px]:pr-6 ${bgTexture?.white ? "" : "border-color  border-r"} py-4 tracking-wide font-medium text-start px-3`}>
                    PRICE
                  </th>
                  <th className={` text-sm max-[1100px]:pr-7 tracking-wide ${bgTexture?.white ? "" : "border-color  border-r"} font-medium text-start px-3`}>
                    <HiMenuAlt1 className=" text-xl mx-auto" />
                  </th>
                </tr>
              </thead>
              <tbody className={`${bgTexture?.white ? "text-black" : "tableTitle"} text-start`}>
                {data?.map((course) => {
                  return (
                    <tr onClick={toDetail} className={`${bgTexture?.white ? "hover:bg-gray-100 duration-300" : " custom-hover"} cursor-pointer`} key={course?.id}>
                      <td className={`tracking-wide ${bgTexture?.white ? " border-y-8 border-white" : "border-color border-r"} font-medium text-sm py-4 px-3`}>
                        {course?.id}
                      </td>
                      <td className={`tracking-wide ${bgTexture?.white ? " border-y-8 border-white" : "border-color border-r"} font-medium text-sm py-4 px-3 `}>
                        {course?.name}
                      </td>
                      <td className={`tracking-wide ${bgTexture?.white ? " border-y-8 border-white" : "border-color border-r"} font-medium text-sm py-4 px-3 `}>
                        {course?.category}
                      </td>
                      <td className={`tracking-wide ${bgTexture?.white ? " border-y-8 border-white" : "border-color border-r"} font-medium text-sm py-4 px-3 `}>
                        {course?.duration}
                      </td>
                      <td className={`tracking-wide ${bgTexture?.white ? " border-y-8 border-white" : "border-color border-r"} font-medium text-sm py-4 px-3 `}>
                        {course?.description}
                      </td>
                      <td className={`tracking-wide ${bgTexture?.white ? " border-y-8 border-white" : "border-color border-r"} font-medium text-sm py-4 px-3 `}>
                        {course?.lesson}
                      </td>
                      <td className={`tracking-wide ${bgTexture?.white ? " border-y-8 border-white" : "border-color border-r"} font-medium text-sm py-4 px-3 `}>
                        {course?.price}
                      </td>
                      <td className={`tracking-wide ${bgTexture?.white ? " border-y-8 border-white" : "border-color border-r"} font-medium text-sm py-4 px-3 `}>
                        <span className=" flex">
                          <MdModeEdit className={`text-lg cursor-pointer ${bgTexture?.white && "text-blue-700"} mx-auto`} />
                          <MdDeleteSweep className={` text-lg cursor-pointer ${bgTexture?.white && "text-red-500"} mr-auto`} />
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className={`mx-auto mb-5 ${bgTexture?.white ? "bgTransparent2" : "bgTransparent"} rounded`}>
          {bgTexture?.white ? <div className={`border-2 rounded flex`}>
            <button className={` cursor-pointer border-r-2 hover:bg-blue-100 duration-500`} onClick={prePage}>
              <p className={` px-2 py-2 text-base tracking-wider text-blue-700 font-medium`}>Prev</p>
            </button>
            {
              number.map((n,i) => (
                <button onClick={() => changeCPage(n)} className={`border-r ${currentPage === n ? " bg-[#525fe1]" : "hover:bg-blue-100 duration-500"} cursor-pointer`} key={i}>
                  <p className={`px-4 text-base tracking-wider text-blue-700 font-medium ${currentPage === n && " text-white"}`}>{n}</p>
                </button>
              ))
            }
            <button className={` cursor-pointer border-l hover:bg-blue-100 duration-500`} onClick={nextPage}>
              <p className={`px-2 py-2 text-base tracking-wider text-blue-700 font-medium`}>Next</p>
            </button>
          </div> : <div className={`flex ${bgTexture?.white ? "" : "p-border-color"} rounded`}>
            <button className={` ${bgTexture?.white ? "" : "p-border-r custom-hover"} cursor-pointer`} onClick={prePage}>
              <p className={` px-2 py-2 ${bgTexture?.white ? " text-white bg-blue-700 hover:bg-blue-950 duration-500 rounded-l font-medium" : "tableTitle"} text-base tracking-wider`}>Prev</p>
            </button>
            {
              number.map((n,i) => (
                <button onClick={() => changeCPage(n)} className={` cursor-pointer ${bgTexture?.white ? "" : "p-border-r custom-hover"} ${currentPage === n ? "active" : ""}`} key={i}>
                  <p className={`px-4 ${bgTexture?.white ? " text-black font-medium" : "tableTitle"} text-base tracking-wider`}>{n}</p>
                </button>
              ))
            }
            <button className={`${bgTexture?.white ? "" : "custom-hover"} cursor-pointer `} onClick={nextPage}>
              <p className={`px-2 py-2 ${bgTexture?.white ? " text-white bg-blue-700 hover:bg-blue-950  duration-500 rounded-r font-medium" : "tableTitle"} text-base tracking-wider`}>Next</p>
            </button>
          </div>}
        </div>
        </div>
      </div>
    </div>
  );
};

export default CourseTable;
