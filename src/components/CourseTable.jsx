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
            <table className={`table-responsive ${bgTexture?.white && "bg-gray-100"}`}>
              <thead className={` ${bgTexture?.white ? "text-black border-2 border-black" : "border-color tableTitle"} `}>
                <tr>
                  <th className={` text-sm max-[1100px]:px-4 tracking-wide border-r ${bgTexture?.white ? "border-r-2 border-black" : "border-color"} py-4 font-medium`}>
                    T_ID
                  </th>
                  <th className={` text-sm max-[1100px]:px-10 tracking-wide border-r ${bgTexture?.white ? "border-r-2 border-black" : "border-color"} py-4 font-medium`}>
                    COURSE NAME
                  </th>
                  <th className={` text-sm max-[1100px]:px-10 tracking-wide border-r ${bgTexture?.white ? "border-r-2 border-black" : "border-color"} py-4 font-medium`}>
                    CATEGORY
                  </th>
                  <th className={` text-sm max-[1100px]:px-7 tracking-wide border-r ${bgTexture?.white ? "border-r-2 border-black" : "border-color"} py-4 font-medium`}>
                    DURATION
                  </th>
                  <th className={` text-sm max-[1100px]:px-10 tracking-wide border-r ${bgTexture?.white ? "border-r-2 border-black" : "border-color"} py-4 font-medium`}>
                    DESCRIPTION
                  </th>
                  <th className={` text-sm max-[1100px]:px-5 tracking-wide border-r ${bgTexture?.white ? "border-r-2 border-black" : "border-color"} py-4 font-medium`}>
                    LESSON
                  </th>
                  <th className={` text-sm max-[1100px]:px-6 border-r ${bgTexture?.white ? "border-r-2 border-black" : "border-color"} py-4 tracking-wide font-medium`}>
                    PRICE
                  </th>
                  <th className={` text-sm max-[1100px]:px-7 tracking-wide border-r ${bgTexture?.white ? "border-r-2 border-black" : "border-color"} font-medium`}>
                    <HiMenuAlt1 className=" text-xl mx-auto" />
                  </th>
                </tr>
              </thead>
              <tbody className={`${bgTexture?.white ? "text-black border-2 border-black" : "tableTitle"} text-center`}>
                {data?.map((course) => {
                  return (
                    <tr onClick={toDetail} className={`${bgTexture?.white && "border-b-2 border-black"} custom-hover cursor-pointer`} key={course?.id}>
                      <td className={`tracking-wide border-r ${bgTexture?.white ? "border-r-2 border-black" : "border-color"} font-medium text-sm py-4 `}>
                        {course?.id}
                      </td>
                      <td className={`tracking-wide border-r ${bgTexture?.white ? "border-r-2 border-black" : "border-color"} font-medium text-sm py-4 `}>
                        {course?.name}
                      </td>
                      <td className={`tracking-wide border-r ${bgTexture?.white ? "border-r-2 border-black" : "border-color"} font-medium text-sm py-4 `}>
                        {course?.category}
                      </td>
                      <td className={`tracking-wide border-r ${bgTexture?.white ? "border-r-2 border-black" : "border-color"} font-medium text-sm py-4 `}>
                        {course?.duration}
                      </td>
                      <td className={`tracking-wide border-r ${bgTexture?.white ? "border-r-2 border-black" : "border-color"} font-medium text-sm py-4 `}>
                        {course?.description}
                      </td>
                      <td className={`tracking-wide border-r ${bgTexture?.white ? "border-r-2 border-black" : "border-color"} font-medium text-sm py-4 `}>
                        {course?.lesson}
                      </td>
                      <td className={`tracking-wide border-r ${bgTexture?.white ? "border-r-2 border-black" : "border-color"} font-medium text-sm py-4 `}>
                        {course?.price}
                      </td>
                      <td className={`tracking-wide border-r ${bgTexture?.white ? "border-r-2 border-black" : "border-color"} font-medium text-sm py-4 `}>
                        <span className=" flex">
                          <MdModeEdit className={`text-lg cursor-pointer ${bgTexture?.white && "text-blue-700"} mx-auto`} />
                          <MdDeleteSweep className={` text-lg cursor-pointer ${bgTexture?.white && "text-red-600"} mr-auto`} />
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className={`mx-auto mb-5 ${bgTexture?.white ? "bgTransparent2" : "bgTransparent"} rounded`}>
          <div className={`flex ${bgTexture?.white ? "border-2 border-gray-500" : "p-border-color"} rounded`}>
            <button className={`custom-hover ${bgTexture?.white ? "border-r-2 border-gray-500" : "p-border-r"} cursor-pointer`} onClick={prePage}>
              <p className={` px-2 py-2 ${bgTexture?.white ? " text-black font-medium" : "tableTitle"} text-base tracking-wider`}>Prev</p>
            </button>
            {
              number.map((n,i) => (
                <button onClick={() => changeCPage(n)} className={`custom-hover cursor-pointer ${bgTexture?.white ? "border-r-2 border-gray-500" : "p-border-r"} ${currentPage === n ? "active" : ""}`} key={i}>
                  <p className={`px-4 ${bgTexture?.white ? " text-black font-medium" : "tableTitle"} text-base tracking-wider`}>{n}</p>
                </button>
              ))
            }
            <button className="custom-hover cursor-pointer " onClick={nextPage}>
              <p className={`px-2 py-2 ${bgTexture?.white ? " text-black font-medium" : "tableTitle"} text-base tracking-wider`}>Next</p>
            </button>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default CourseTable;
