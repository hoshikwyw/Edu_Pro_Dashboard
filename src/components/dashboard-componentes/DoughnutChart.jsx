import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { BsThreeDots } from "react-icons/bs";
import { BsFillCircleFill } from "react-icons/bs";
import "../Table.css";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = () => {
  let bgTexture = JSON.parse(localStorage.getItem("bgTexture"));

  const data = {
    datasets: [
      {
        label: ["Direct : 3100","Affiliate : 1500","E-mail : 1000","Other : 500"],
        data: [3100, 1500, 1000, 500],
        backgroundColor: [
          bgTexture?.white ? "#2563eb":"rgba(255, 255, 255,0.99)",
          bgTexture?.white ? "#3b82f6":"rgba(255,255,255,.85)",
          bgTexture?.white ? "#60a5fa":"rgba(255,255,255,.50)",
          bgTexture?.white ? "#93c5fd":"rgba(255,255,255,.25)",
        ],
        borderWidth: 0,
        hoverOffset: 4,
      },
    ],
  };
  const option = {
    plugins: {
      tooltip: {
        callbacks: {
          label: (context) => {
            const labelIndex = context.dataIndex;
            const labels = data.datasets[0].label;
            return labels[labelIndex];
          },
        },
      },
    },
  };
  return (
      <div className={` w-[38%] justify-center max-lg:w-[100%] ${bgTexture?.white ? "bgTransparent2" : "bgTransparent"} flex flex-col gap-4 rounded shadow-md`}>
        <h2 className={`flex mt-4 px-8 justify-between font-medium ${bgTexture?.white ? "text-black" : "text-[rgba(255,255,255,1)]"} text-sm tracking-wide items-center`}>
          Weekly sales{" "}
          <span>
            <BsThreeDots className={`${bgTexture?.white ? "text-black" : "text-[rgba(255,255,255,1)]"} text-xl `} />
          </span>{" "}
        </h2>
        <hr className={` ${bgTexture?.white ? "border-b border-b-[#d1d5db]" : "border-b"} border-t-0 border-r-0 border-l-0 border-color`} />
        <div className=" flex justify-center">
          <div className=" w-[200px] h-[200px] max-[300px]:w-[180px] max-[300px]:h-[180px] max-[260px]:w-[160px] max-[260px]:h-[160px] max-[200px]:w-[140px] max-[200px]:h-[140px]">
            <Doughnut className="" data={data} options={option} />
          </div>
        </div>
        <hr className={` ${bgTexture?.white ? "border-b border-b-[#d1d5db]" : "border-b"} border-t-0 border-r-0 border-l-0 border-color`} />
        <div className="flex flex-col gap-4">
          <div className="flex justify-between mx-8">
            <p className="flex w-[35%] gap-2 items-center tableTitle text-[15px] max-[370px]:text-sm max-[300px]:text-xs  tracking-wider">
              <span>
                <BsFillCircleFill className={` ${bgTexture?.white ? "text-blue-600" : "text-[#ffffffd9]"} mb-[2px]`} />
              </span>
              <p className={`${bgTexture?.white ? "text-black" : "text-[#ffffffd9]"}`}>Direct</p>
            </p>
            <p className="w-[20%] tableTitle text-[15px] max-[370px]:text-sm max-[300px]:text-xs ">
              $3100
            </p>
            <p className="w-[15%] tableTitle text-[15px] max-[370px]:text-sm max-[300px]:text-xs ">
              +75%
            </p>
          </div>
          <hr className={` ${bgTexture?.white ? "border-b border-b-[#d1d5db]" : "border-b"} border-t-0 border-r-0 border-l-0 border-color`} />
          <div className="flex justify-between mx-8">
            <p className="w-[35%] flex gap-2 items-center tableTitle text-[15px] max-[370px]:text-sm max-[300px]:text-xs  tracking-wider">
              <span>
                <BsFillCircleFill className={`${bgTexture?.white ? "text-blue-500" : "text-[rgba(255,255,255,.85)]"}`}/>
              </span>
              <p className={`${bgTexture?.white ? "text-black" : "text-[#ffffffd9]"}`}>
              Affiliate
              </p>
            </p>
            <p className="w-[20%] tableTitle text-[15px] max-[370px]:text-sm max-[300px]:text-xs ">
              $1500
            </p>
            <p className="w-[15%] tableTitle text-[15px] max-[370px]:text-sm max-[300px]:text-xs ">
              +55%
            </p>
          </div>
          <hr className={` ${bgTexture?.white ? "border-b border-b-[#d1d5db]" : "border-b"} border-t-0 border-r-0 border-l-0 border-color`} />
          <div className="flex justify-between mx-8">
            <p className="w-[35%] flex gap-2 items-center tableTitle text-[15px] max-[370px]:text-sm max-[300px]:text-xs  tracking-wider">
              <span>
                <BsFillCircleFill className={`${bgTexture?.white ? "text-blue-400" : "text-[rgba(255,255,255,.50)]"}`} />
              </span>
              <p className={`${bgTexture?.white ? "text-black" : "text-[#ffffffd9]"}`}>
              E-mail
              </p>
            </p>
            <p className="w-[20%] tableTitle text-[15px] max-[370px]:text-sm max-[300px]:text-xs ">
              $1000
            </p>
            <p className="w-[15%] tableTitle text-[15px] max-[370px]:text-sm max-[300px]:text-xs ">
              +37%
            </p>
          </div>
          <hr className={` ${bgTexture?.white ? "border-b border-b-[#d1d5db]" : "border-b"} border-t-0 border-r-0 border-l-0 border-color`} />
          <div className="flex justify-between mx-8 mb-4">
            <p className="w-[35%] flex gap-2 items-center tableTitle text-[15px] max-[370px]:text-sm max-[300px]:text-xs  tracking-wider">
              <span>
                <BsFillCircleFill className={`${bgTexture?.white ? "text-blue-300" : "text-[rgba(255,255,255,.25)]"}`} />
              </span>
              <p className={`${bgTexture?.white ? "text-black" : "text-[#ffffffd9]"}`}>
              Other
              </p>
            </p>
            <p className="w-[20%] tableTitle text-[15px] max-[370px]:text-sm max-[300px]:text-xs ">
              $500
            </p>
            <p className="w-[15%] tableTitle text-[15px] max-[370px]:text-sm max-[300px]:text-xs ">
              +23%
            </p>
          </div>
        </div>
      </div>
  );
};

export default DoughnutChart;
