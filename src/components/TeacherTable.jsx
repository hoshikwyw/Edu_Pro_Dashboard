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
              <thead className={`border-x-0 ${bgTexture?.white ? "text-black border-2 border-black" : "border-color tableTitle"} `}>
                <tr>
                  <th className="max-[1100px]:px-4 text-sm tracking-wide  font-medium py-4">
                    T_ID
                  </th>
                  <th className="max-[1100px]:px-8 text-sm tracking-wide  font-medium py-4">
                    TEACHER NAME
                  </th>
                  <th className="max-[1100px]:px-4 text-sm tracking-wide  font-medium py-4">
                    AGE
                  </th>
                  <th className="max-[1100px]:px-8 text-sm tracking-wide  font-medium py-4">
                    DEPARTMENT
                  </th>
                  <th className="max-[1100px]:px-8 text-sm tracking-wide  font-medium py-4">
                    DATE_OF_JOIN
                  </th>
                  <th className="max-[1100px]:px-5 text-sm tracking-wide  font-medium py-4">
                    SALARY
                  </th>
                  <th className="max-[1100px]:px-5 text-sm  tracking-wide font-medium py-4">
                    GENDER
                  </th>
                  <th className="max-[1100px]:px-10 text-sm tracking-wide font-medium">
                    Address
                  </th>
                </tr>
              </thead>
              <tbody className={`${bgTexture?.white ? "text-black" : "tableTitle"} text-center`}>
                {data?.map((teacher) => {
                  return (
                    <tr onClick={toDetail} className="custom-hover cursor-pointer" key={teacher?.id}>
                      <td className={`tracking-wide border-b ${bgTexture?.white ? "border-b-2 border-black" : "border-b-color"}  font-medium text-sm py-4 `}>
                        {teacher?.id}
                      </td>
                      <td className={`tracking-wide border-b ${bgTexture?.white ? "border-b-2 border-black" : "border-b-color"}  font-medium text-sm py-4 `}>
                        {teacher?.name}
                      </td>
                      <td className={`tracking-wide border-b ${bgTexture?.white ? "border-b-2 border-black" : "border-b-color"}  font-medium text-sm py-4 `}>
                        {teacher?.age}
                      </td>
                      <td className={`tracking-wide border-b ${bgTexture?.white ? "border-b-2 border-black" : "border-b-color"}  font-medium text-sm py-4 `}>
                        {teacher?.department}
                      </td>
                      <td className={`tracking-wide border-b ${bgTexture?.white ? "border-b-2 border-black" : "border-b-color"}  font-medium text-sm py-4 `}>
                        {teacher?.date}
                      </td>
                      <td className={`tracking-wide border-b ${bgTexture?.white ? "border-b-2 border-black" : "border-b-color"}  font-medium text-sm py-4 `}>
                        {teacher?.salary}
                      </td>
                      <td className={`tracking-wide border-b ${bgTexture?.white ? "border-b-2 border-black" : "border-b-color"}  font-medium text-sm py-4 `}>
                        {teacher?.gender}
                      </td>
                      <td className={`tracking-wide border-b ${bgTexture?.white ? "border-b-2 border-black" : "border-b-color"}  font-medium text-sm py-4 `}>
                        {teacher?.address}
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

export default TeacherTable;
