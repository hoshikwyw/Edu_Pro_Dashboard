import React, { useState } from "react";
import { VscArrowSmallUp } from "react-icons/vsc";
import { BsCircleFill } from "react-icons/bs";
import { Line } from "react-chartjs-2";
import "./Chart.css";
import {
  Chart as ChartJs,
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
} from "chart.js";
ChartJs.register(
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler
);

const LineChart = () => {
  let bgTexture = JSON.parse(localStorage.getItem("bgTexture"));

  const [data, setData] = useState({
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
    ],
    datasets: [
      {
        label: "New Dataset",
        data: [2, 2, 5, 3, 4, 2, 4, 2, 4, 2],
        backgroundColor: bgTexture?.white ? "#2563eb":"#fff",
        borderColor: "white",
        showLine: false,
        tension: 0.6,
        fill: true,
        pointStyle: "circle",
        borderWidth: 0,
      },
      {
        label: "Old Dataset",
        data: [4, 3, 8, 5, 7, 4, 6, 3, 6, 3],
        backgroundColor: bgTexture?.white ? "#1d4ed890":"rgba(255, 255, 255, 0.4)",
        borderColor: "white",
        showLine: false,
        tension: 0.6,
        fill: true,
        pointStyle: "circle",
        borderWidth: 0,
        hoverOffset: 4,
      },
    ],
  });

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        grid: {
          color: bgTexture?.white ? "#d1d5db":"rgba(255, 255, 255, 0.1)" ,
        },
        beginAtZero: true,
        display: true,
        ticks: {
          // callback: function (value, index, values) {
          //   if (value % 2 === 1) {
          //     return value;
          //   }
          //   return '';
          // },
          color: bgTexture?.white ? "black":"white",
        },
      },

      x: {
        grid: {
          color:  bgTexture?.white ? "#d1d5db":"rgba(255, 255, 255, 0.1)",
        },
        ticks: {
          color: bgTexture?.white ? "black":"white",

        },
      },
    },
  };
  return (
    <div className={` w-[60%] justify-center max-lg:w-[100%] rounded ${bgTexture?.white ? "bgTransparent2" : "bgTransparent"} shadow-md`}>
      <h1 className={`${bgTexture?.white ? "text-black" : "text-[rgba(255,255,255,0.9)]"} tracking-wider text-sm font-medium pl-10 py-4`}>
        Title
      </h1>
      <hr className={`border-t ${bgTexture?.white ? "border-t-color2" : "border-t-color"} `} />

      <div className=" pl-10 pt-5 flex gap-4">
        <div className={`${bgTexture?.white ? "text-black" : "subtitle"} flex gap-2 items-center`}>
          <p>
            <BsCircleFill className={`${bgTexture?.white ? "new-color2" : "new-color"}`} />
          </p>
          <p>New students</p>
        </div>
        <div className={`${bgTexture?.white ? "text-black" : "subtitle"} flex gap-2 items-center`}>
          <p className={`${bgTexture?.white ? "old-color2" : "old-color"}`}>
            <BsCircleFill />
          </p>
          <p>Old students</p>
        </div>
      </div>

      <div className="px-5 w-full h-[331px] max-sm:h-[200px] max-[450px]:h-[180px] max-[400px]:h-[150px] max-[380px]:h-[130px] max-[350px]:h-[120px] flex justify-center">
        <Line data={data} options={options} className="my-auto py-3"></Line>
      </div>

      <div className={`${bgTexture?.white ? "border-t-color2" : "border-t-color "} w-full max-lg:flex-col flex justify-center border-t `}>
        <div className={`${bgTexture?.white ? "border-r-color2" : "border-r-color "} max-lg:border-r-0 border-r w-full flex justify-center py-3`}>
          <div>
            <h1 className={`${bgTexture?.white ? "text-black" : "title"} text-center text-lg `}>45.87M</h1>
            <p className={` text-sm ${bgTexture?.white ? "text-black" : "text-[#ffffffd9] "} flex items-center`}>
              Students
              <VscArrowSmallUp className=" text-2xl font-bold" />
              12.56%
            </p>
          </div>
        </div>
        <hr className={` hidden max-lg:block custom-hr`} />
        <div className={`${bgTexture?.white ? "border-r-color2" : "border-r-color "} max-lg:border-r-0 border-r w-full flex justify-center py-3`}>
          <div>
            <h1 className={`${bgTexture?.white ? "text-black" : "title"} text-center text-lg `}>45.87M</h1>
            <p className={` text-sm ${bgTexture?.white ? "text-black" : "text-[#ffffffd9] "} flex items-center`}>
              Students
              <VscArrowSmallUp className=" text-2xl font-bold" />
              12.56%
            </p>
          </div>
        </div>
        <hr className={` hidden max-lg:block ${bgTexture?.white ? "custom-hr2" : "custom-hr"}`} />
        <div className=" w-full flex justify-center py-3">
          <div>
            <h1 className={`${bgTexture?.white ? "text-black" : "title"} text-center text-lg `}>45.87M</h1>
            <p className={` text-sm ${bgTexture?.white ? "text-black" : "text-[#ffffffd9] "} flex items-center`}>
              Students
              <VscArrowSmallUp className=" text-2xl font-bold" />
              12.56%
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LineChart;
