import React, { useEffect, useState } from "react";
import "./Table.css";
import teacherTable from "../json/teacherTable.json";
import Navbar from "./Navbar";
import { StateContextCustom } from "./context/StateContext";
import { useNavigate } from "react-router-dom";

const TeacherTable = () => {
  const [teachers, setTeachers] = useState([]);
  const { isSidebarOpen } = StateContextCustom();
  const nav = useNavigate();
  const toDetail = () => nav("/detail");
  let bgTexture = JSON.parse(localStorage.getItem("bgTexture"));

  useEffect(() => {
    setTeachers(teacherTable);
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const dataPerPage = 7;
  const lastIndex = currentPage * dataPerPage;
  const firstIndex = lastIndex - dataPerPage;
  const data = teachers.slice(firstIndex, lastIndex);
  const nPage = Math.ceil(teachers.length / dataPerPage);
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
        <Navbar />
      </div>
      <div
        className={`mt-[52px] duration-500 ${
          isSidebarOpen && " ml-[230px]"
        } max-lg:ml-0`}
      >
        <div className="flex justify-center items-start flex-col gap-6">
          <div className={` ${bgTexture?.white ? "bgTransparent2 shadow2" : "bgTransparent shadow"} w-[95%] mt-10 flex flex-col gap-3 rounded p-7 mx-auto`}>
            <h1 className={` font-medium ${bgTexture?.white ? "text-black" : " text-white"} text-lg tracking-wide`}>
              Teacher Table
            </h1>
            <table className="table-responsive">
              <thead className={`border-x-0 ${bgTexture?.white ? "bg-[#525fe1] text-white" : "border-color tableTitle"} `}>
                <tr>
                  <th className="max-[1100px]:pr-4 text-sm tracking-wide px-3  font-medium py-4 text-start">
                    T_ID
                  </th>
                  <th className="max-[1100px]:pr-8 text-sm tracking-wide px-3  font-medium py-4 text-start">
                    TEACHER NAME
                  </th>
                  <th className="max-[1100px]:pr-4 text-sm tracking-wide px-3  font-medium py-4 text-start">
                    AGE
                  </th>
                  <th className="max-[1100px]:pr-8 text-sm tracking-wide px-3  font-medium py-4 text-start">
                    DEPARTMENT
                  </th>
                  <th className="max-[1100px]:pr-8 text-sm tracking-wide px-3  font-medium py-4 text-start">
                    DATE_OF_JOIN
                  </th>
                  <th className="max-[1100px]:pr-5 text-sm tracking-wide px-3  font-medium py-4 text-start">
                    SALARY
                  </th>
                  <th className="max-[1100px]:pr-5 text-sm  tracking-wide px-3 font-medium py-4 text-start">
                    GENDER
                  </th>
                  <th className="max-[1100px]:pr-10 text-sm tracking-wide px-3 font-medium text-start">
                    Address
                  </th>
                </tr>
              </thead>
              <tbody className={`${bgTexture?.white ? "text-blue-700 bg-gray-50" : "tableTitle"} text-start`}>
                {data?.map((teacher) => {
                  return (
                    <tr onClick={toDetail} className={`${bgTexture?.white ? " hover:bg-gray-100 duration-500" : "custom-hover"} cursor-pointer`} key={teacher?.id}>
                      <td className={`tracking-wide border-b ${bgTexture?.white ? "border-b-2 border-gray-100" : "border-b-color"}  font-medium text-sm py-4 px-3 `}>
                        {teacher?.id}
                      </td>
                      <td className={`tracking-wide border-b ${bgTexture?.white ? "border-b-2 border-gray-100" : "border-b-color"}  font-medium text-sm py-4 px-3 `}>
                        {teacher?.name}
                      </td>
                      <td className={`tracking-wide border-b ${bgTexture?.white ? "border-b-2 border-gray-100" : "border-b-color"}  font-medium text-sm py-4 px-3 `}>
                        {teacher?.age}
                      </td>
                      <td className={`tracking-wide border-b ${bgTexture?.white ? "border-b-2 border-gray-100" : "border-b-color"}  font-medium text-sm py-4 px-3 `}>
                        {teacher?.department}
                      </td>
                      <td className={`tracking-wide border-b ${bgTexture?.white ? "border-b-2 border-gray-100" : "border-b-color"}  font-medium text-sm py-4 px-3 `}>
                        {teacher?.date}
                      </td>
                      <td className={`tracking-wide border-b ${bgTexture?.white ? "border-b-2 border-gray-100" : "border-b-color"}  font-medium text-sm py-4 px-3 `}>
                        {teacher?.salary}
                      </td>
                      <td className={`tracking-wide border-b ${bgTexture?.white ? "border-b-2 border-gray-100" : "border-b-color"}  font-medium text-sm py-4 px-3 `}>
                        {teacher?.gender}
                      </td>
                      <td className={`tracking-wide border-b ${bgTexture?.white ? "border-b-2 border-gray-100" : "border-b-color"}  font-medium text-sm py-4 px-3 `}>
                        {teacher?.address}
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

export default TeacherTable;
