import React, { useEffect, useState } from 'react'
import "./Table.css";
import teacherTable from "../json/teacherTable.json";

const TeacherTable = () => {
  const [teachers,setTeachers] = useState([]); 
  useEffect(() => {
    setTeachers(teacherTable);
  },[]);

  const [currentPage,setCurrentPage] = useState(1);
  const dataPerPage = 5;
  const lastIndex = currentPage * dataPerPage;
  const firstIndex = lastIndex - dataPerPage;
  const data = teachers.slice(firstIndex, lastIndex);
  const nPage = Math.ceil(teachers.length / dataPerPage); 
  const number = [...Array(nPage +1).keys()].slice(1);

  const prePage = () => {
    if(currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const changeCPage = (id) => {
    setCurrentPage(id);
  };
  const nextPage = () => {
    if(currentPage !== nPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className='flex justify-center items-start flex-col gap-6'>
      <div className=' bgTransparent w-[95%] mt-10 flex flex-col gap-3 rounded p-7 mx-auto'>
        <h1 className=' font-medium text-white text-lg tracking-wide'>Teacher Table</h1>
        <table className='table-responsive'>
          <thead className='tableTitle border-b border-color border-x-0'>
            <tr>
              <th className='max-[1100px]:px-4 text-sm tracking-wide  font-medium py-4'>T_ID</th>
              <th className='max-[1100px]:px-8 text-sm tracking-wide  font-medium py-4'>TEACHER NAME</th>
              <th className='max-[1100px]:px-4 text-sm tracking-wide  font-medium py-4'>AGE</th>
              <th className='max-[1100px]:px-8 text-sm tracking-wide  font-medium py-4'>DEPARTMENT</th>
              <th className='max-[1100px]:px-8 text-sm tracking-wide  font-medium py-4'>DATE_OF_JOIN</th>
              <th className='max-[1100px]:px-5 text-sm tracking-wide  font-medium py-4'>SALARY</th>
              <th className='max-[1100px]:px-5 text-sm  tracking-wide font-medium py-4'>GENDER</th>
              <th className='max-[1100px]:px-10 text-sm tracking-wide font-medium'>Address</th>
            </tr>
          </thead>
          <tbody className="tableTitle text-center">
            {data?.map((teacher) => {
              return (
                <tr className="custom-hover" key={teacher?.id}>
                  <td className="tracking-wide border-b border-b-color  font-medium text-sm py-4 ">
                    {teacher?.id}
                  </td>
                  <td className="tracking-wide border-b border-b-color  font-medium text-sm py-4 ">
                    {teacher?.name}
                  </td>
                  <td className="tracking-wide border-b border-b-color  font-medium text-sm py-4 ">
                    {teacher?.age}
                  </td>
                  <td className="tracking-wide border-b border-b-color  font-medium text-sm py-4 ">
                    {teacher?.department}
                  </td>
                  <td className="tracking-wide border-b border-b-color  font-medium text-sm py-4 ">
                    {teacher?.date}
                  </td>
                  <td className="tracking-wide border-b border-b-color  font-medium text-sm py-4 ">
                    {teacher?.salary}
                  </td>
                  <td className="tracking-wide border-b border-b-color  font-medium text-sm py-4 ">
                    {teacher?.gender}
                  </td>
                  <td className="tracking-wide border-b border-b-color  font-medium text-sm py-4 ">
                    {teacher?.address}
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
  )
}

export default TeacherTable
