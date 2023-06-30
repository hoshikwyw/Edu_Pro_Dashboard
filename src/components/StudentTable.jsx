import React, { useEffect, useState } from "react";
import "./Table.css";
import studentTable from "../json/studentTable.json";
import { StateContextCustom } from "./context/StateContext";
import Navbar from "./Navbar";
import { Navigate, useNavigate } from "react-router-dom";

const StudentTable = () => {
  const [students, setStudents] = useState([]);
  const { isSidebarOpen } = StateContextCustom();
  const nav = useNavigate();
  const toDetail = () => nav("/detail");
  useEffect(() => {
    setStudents(studentTable);
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const dataPerPage = 5;
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
        <div className=" bgTransparent w-[95%] mt-10 flex flex-col gap-3 rounded p-7 mx-auto">
          <h1 className=" font-medium text-white text-lg tracking-wide">
            Student Table
          </h1>
          <table className="table-responsive">
            <thead className="tableTitle border-b border-color">
              <tr>
                <th className="tracking-wide border-r border-color font-medium text-sm py-4 max-[1100px]:px-4">
                  T_ID
                </th>
                <th className="tracking-wide border-r border-color font-medium text-sm py-4 max-[1100px]:px-12">
                  STUDENT NAME
                </th>
                <th className="tracking-wide border-r border-color font-medium text-sm py-4 max-[1100px]:px-20">
                  EMAIL
                </th>
                <th className="tracking-wide border-r border-color font-medium text-sm py-4 max-[1100px]:px-14">
                  PHONE
                </th>
                <th className="tracking-wide border-r border-color font-medium text-sm py-4 max-[1100px]:px-4">
                  AGE
                </th>
                <th className="tracking-wide border-r border-color font-medium text-sm py-4 max-[1100px]:px-24">
                  ADDRESS
                </th>
              </tr>
            </thead>
            <tbody className="tableTitle text-center">
              {data?.map((student) => {
                return (
                  <tr onClick={toDetail} className="custom-hover cursor-pointer" key={student.id}>
                    <td className="tracking-wide border-r border-color font-medium text-sm py-4 ">
                      {student?.id}
                    </td>
                    <td className="tracking-wide border-r border-color font-medium text-sm py-4 ">
                      {student?.name}
                    </td>
                    <td className="tracking-wide border-r border-color font-medium text-sm py-4 ">
                      {student?.email}
                    </td>
                    <td className="tracking-wide border-r border-color font-medium text-sm py-4 ">
                      {student?.phone}
                    </td>
                    <td className="tracking-wide border-r border-color font-medium text-sm py-4 ">
                      {student?.age}
                    </td>
                    <td className="tracking-wide border-r border-color font-medium text-sm py-4 ">
                      {student?.address}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="mx-auto mb-5 bgTransparent rounded">
          <div className="flex p-border-color rounded">
            <button className="custom-hover p-border-r cursor-pointer" onClick={prePage}>
              <p className=" px-2 py-2 tableTitle text-base tracking-wider">Prev</p>
            </button>
            {
              number.map((n,i) => (
                <button onClick={() => changeCPage(n)} className={`custom-hover cursor-pointer p-border-r ${currentPage === n ? "active" : ""}`} key={i}>
                  <p className="px-4 tableTitle text-base tracking-wider">{n}</p>
                </button>
              ))
            }
            <button className="custom-hover cursor-pointer " onClick={nextPage}>
              <p className="px-2 py-2 tableTitle text-base tracking-wider">Next</p>
            </button>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default StudentTable;
