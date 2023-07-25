import React, { useEffect, useState } from "react";
import "./Table.css";
import studentTable from "../json/studentTable.json";
import { StateContextCustom } from "./context/StateContext";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

const StudentTable = () => {
  const [students, setStudents] = useState([]);
  const { isSidebarOpen } = StateContextCustom();
  const nav = useNavigate();
  const toDetail = () => nav("/detail");
  let bgTexture = JSON.parse(localStorage.getItem("bgTexture"));

  useEffect(() => {
    setStudents(studentTable);
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const dataPerPage = 7;
  const lastIndex = currentPage * dataPerPage;
  const firstIndex = lastIndex - dataPerPage;
  const data = students.slice(firstIndex, lastIndex);
  const nPage = Math.ceil(students.length / dataPerPage);
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
    <div className=" flex flex-col">
      <div>
        <Navbar />
      </div>
      <div className={`mt-[52px] duration-500 ${isSidebarOpen && " ml-[230px]" } max-lg:ml-0`}>
        <div className="flex justify-center items-start flex-col gap-6">
        <div className={`${bgTexture?.white ? "bgTransparent2 shadow2" : "bgTransparent shadow"} w-[95%] mt-10 flex flex-col gap-3 rounded p-7 mx-auto`}>
          <h1 className={` font-medium ${bgTexture?.white ? "text-black" : " text-white"} text-lg tracking-wide`}>
            Student Table
          </h1>
          <table className={`table-responsive ${bgTexture?.white && "bg-white"}`}>
            <thead className={` ${bgTexture?.white ? "border-b text-white bg-[#525fe1]" : "border-color tableTitle"} `}>
              <tr>
                <th className={`tracking-wide ${bgTexture?.white ? "" : "border-r border-color"} font-medium text-sm py-4 max-[1100px]:px-4`}>
                  T_ID
                </th>
                <th className={`tracking-wide ${bgTexture?.white ? "" : "border-r border-color"} font-medium text-sm py-4 max-[1100px]:px-12`}>
                  STUDENT NAME
                </th>
                <th className={`tracking-wide ${bgTexture?.white ? "" : "border-r border-color"} font-medium text-sm py-4 max-[1100px]:px-20`}>
                  EMAIL
                </th>
                <th className={`tracking-wide ${bgTexture?.white ? "" : "border-r border-color"} font-medium text-sm py-4 max-[1100px]:px-14`}>
                  PHONE
                </th>
                <th className={`tracking-wide ${bgTexture?.white ? "" : "border-r border-color"} font-medium text-sm py-4 max-[1100px]:px-4`}>
                  AGE
                </th>
                <th className={`tracking-wide ${bgTexture?.white ? "" : "border-r border-color"} font-medium text-sm py-4 max-[1100px]:px-24`}>
                  ADDRESS
                </th>
              </tr>
            </thead>
            {bgTexture?.white ? <tbody className={`${bgTexture?.white ? "text-black" : "tableTitle"} text-center`}>
              {data?.map((student) => {
                return (
                  <tr onClick={toDetail} className={`${student.id % 2 == 0 && "bg-[#efeef4]"} ${bgTexture?.white ? " hover:bg-gray-100 duration-200" : "custom-hover"} cursor-pointer`} key={student.id}>
                    <td className={`tracking-wide ${bgTexture?.white ? "" : "border-color border-r"} font-medium text-sm py-4`}>
                      {student?.id}
                    </td>
                    <td className={`tracking-wide ${bgTexture?.white ? "" : "border-color border-r"} font-medium text-sm py-4`}>
                      {student?.name}
                    </td>
                    <td className={`tracking-wide ${bgTexture?.white ? "" : "border-color border-r"} font-medium text-sm py-4`}>
                      {student?.email}
                    </td>
                    <td className={`tracking-wide ${bgTexture?.white ? "" : "border-color border-r"} font-medium text-sm py-4`}>
                      {student?.phone}
                    </td>
                    <td className={`tracking-wide ${bgTexture?.white ? "" : "border-color border-r"} font-medium text-sm py-4`}>
                      {student?.age}
                    </td>
                    <td className={`tracking-wide ${bgTexture?.white ? "" : "border-color border-r"} font-medium text-sm py-4`}>
                      {student?.address}
                    </td>
                  </tr>
                );
              })}
            </tbody> : <tbody className={`${bgTexture?.white ? "text-black" : "tableTitle"} text-center`}>
              {data?.map((student) => {
                return (
                  <tr onClick={toDetail} className={` ${bgTexture?.white ? " hover:bg-blue-200 duration-200" : "custom-hover"} cursor-pointer`} key={student.id}>
                    <td className={`tracking-wide ${bgTexture?.white ? "" : "border-color border-r"} font-medium text-sm py-4`}>
                      {student?.id}
                    </td>
                    <td className={`tracking-wide ${bgTexture?.white ? "" : "border-color border-r"} font-medium text-sm py-4`}>
                      {student?.name}
                    </td>
                    <td className={`tracking-wide ${bgTexture?.white ? "" : "border-color border-r"} font-medium text-sm py-4`}>
                      {student?.email}
                    </td>
                    <td className={`tracking-wide ${bgTexture?.white ? "" : "border-color border-r"} font-medium text-sm py-4`}>
                      {student?.phone}
                    </td>
                    <td className={`tracking-wide ${bgTexture?.white ? "" : "border-color border-r"} font-medium text-sm py-4`}>
                      {student?.age}
                    </td>
                    <td className={`tracking-wide ${bgTexture?.white ? "" : "border-color border-r"} font-medium text-sm py-4`}>
                      {student?.address}
                    </td>
                  </tr>
                );
              })}
            </tbody> }
          </table>
        </div>
        <div className={`mx-auto mb-5 ${bgTexture?.white ? "bgTransparent2" : "bgTransparent"} rounded`}>
          {bgTexture?.white ? <div className={`border-2 rounded flex`}>
            <button className={` cursor-pointer border-r-2 hover:bg-blue-100 duration-500`} onClick={prePage}>
              <p className={` px-2 py-2 text-base tracking-wider text-blue-500`}>Prev</p>
            </button>
            {
              number.map((n,i) => (
                <button onClick={() => changeCPage(n)} className={`border-r ${currentPage === n ? " bg-blue-500" : "hover:bg-blue-100 duration-500"} cursor-pointer`} key={i}>
                  <p className={`px-4 text-base tracking-wider text-blue-500 ${currentPage === n && " text-white"}`}>{n}</p>
                </button>
              ))
            }
            <button className={` cursor-pointer border-l hover:bg-blue-100 duration-500`} onClick={nextPage}>
              <p className={`px-2 py-2 text-base tracking-wider text-blue-500`}>Next</p>
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

export default StudentTable;
