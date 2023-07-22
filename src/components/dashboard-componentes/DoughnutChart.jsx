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
          "rgba(255, 255, 255,0.99)",
          "rgba(255,255,255,.85)",
          "rgba(255,255,255,.50)",
          "rgba(255,255,255,.25)",
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
            <BsThreeDots className=" text-xl" />
          </span>{" "}
        </h2>
        <hr className=" border-b border-t-0 border-r-0 border-l-0 border-color" />
        <div className=" flex justify-center">
          <div className=" w-[200px] h-[200px] max-[300px]:w-[180px] max-[300px]:h-[180px] max-[260px]:w-[160px] max-[260px]:h-[160px] max-[200px]:w-[140px] max-[200px]:h-[140px]">
            <Doughnut className="" data={data} options={option} />
          </div>
        </div>
        <hr className=" border-b border-t-0 border-r-0 border-l-0 border-color" />
        <div className="flex flex-col gap-4">
          <div className="flex justify-between mx-8">
            <p className="flex w-[35%] gap-2 items-center tableTitle text-[15px] max-[370px]:text-sm max-[300px]:text-xs  tracking-wider">
              <span>
                <BsFillCircleFill className=" text-white mb-[2px]" />
              </span>
              Direct
            </p>
            <p className="w-[20%] tableTitle text-[15px] max-[370px]:text-sm max-[300px]:text-xs ">
              $3100
            </p>
            <p className="w-[15%] tableTitle text-[15px] max-[370px]:text-sm max-[300px]:text-xs ">
              +75%
            </p>
          </div>
          <hr className=" border-b border-t-0 border-r-0 border-l-0 border-color" />
          <div className="flex justify-between mx-8">
            <p className="w-[35%] flex gap-2 items-center tableTitle text-[15px] max-[370px]:text-sm max-[300px]:text-xs  tracking-wider">
              <span>
                <BsFillCircleFill className=" text-[rgba(255,255,255,.85)] mb-[2px]" />
              </span>
              Affiliate
            </p>
            <p className="w-[20%] tableTitle text-[15px] max-[370px]:text-sm max-[300px]:text-xs ">
              $1500
            </p>
            <p className="w-[15%] tableTitle text-[15px] max-[370px]:text-sm max-[300px]:text-xs ">
              +55%
            </p>
          </div>
          <hr className=" border-b border-t-0 border-r-0 border-l-0 border-color" />
          <div className="flex justify-between mx-8">
            <p className="w-[35%] flex gap-2 items-center tableTitle text-[15px] max-[370px]:text-sm max-[300px]:text-xs  tracking-wider">
              <span>
                <BsFillCircleFill className=" text-[rgba(255,255,255,.50)] mb-[2px]" />
              </span>
              E-mail
            </p>
            <p className="w-[20%] tableTitle text-[15px] max-[370px]:text-sm max-[300px]:text-xs ">
              $1000
            </p>
            <p className="w-[15%] tableTitle text-[15px] max-[370px]:text-sm max-[300px]:text-xs ">
              +37%
            </p>
          </div>
          <hr className=" border-b border-t-0 border-r-0 border-l-0 border-color" />
          <div className="flex justify-between mx-8 mb-4">
            <p className="w-[35%] flex gap-2 items-center tableTitle text-[15px] max-[370px]:text-sm max-[300px]:text-xs  tracking-wider">
              <span>
                <BsFillCircleFill className=" text-[rgba(255,255,255,.25)] mb-[2px]" />
              </span>
              Other
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
