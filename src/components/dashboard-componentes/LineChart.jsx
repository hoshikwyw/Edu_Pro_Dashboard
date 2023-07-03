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
        backgroundColor: "#fff",
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
        backgroundColor: "rgba(255, 255, 255, 0.4)",
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
          color: "rgba(255, 255, 255, 0.1)",
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
          color: "white",
        },
      },

      x: {
        grid: {
          color: "rgba(255, 255, 255, 0.1)",
        },
        ticks: {
          color: "white",
        },
      },
    },
  };
  return (
    <div className=" w-[60%] justify-center max-lg:w-[100%] rounded bgTransparent shadow-md">
      <h1 className=" text-[rgba(255,255,255,0.9)] tracking-wider text-sm font-medium pl-10 py-4">
        Title
      </h1>
      <hr className="border-t border-t-color" />

      <div className=" pl-10 pt-5 flex gap-4">
        <div className=" subtitle flex gap-2 items-center">
          <p>
            <BsCircleFill className="new-color" />
          </p>
          <p>New students</p>
        </div>
        <div className=" subtitle flex gap-2 items-center">
          <p className="old-color">
            <BsCircleFill />
          </p>
          <p>Old students</p>
        </div>
      </div>

      <div className="px-5 w-full h-[331px] flex justify-center">
        <Line data={data} options={options} className="my-auto"></Line>
      </div>

      <div className=" w-full max-lg:flex-col flex justify-center border-t border-t-color  ">
        <div className=" max-lg:border-r-0 border-r border-r-color w-full flex justify-center py-3">
          <div>
            <h1 className=" text-center text-lg title">45.87M</h1>
            <p className=" text-sm text-[#ffffffd9] flex items-center">
              Students
              <VscArrowSmallUp className=" text-2xl font-bold" />
              12.56%
            </p>
          </div>
        </div>
        <hr className=" hidden max-lg:block custom-hr" />
        <div className=" max-lg:border-r-0 border-r border-r-color w-full flex justify-center py-3">
          <div>
            <h1 className=" text-center text-lg title">45.87M</h1>
            <p className=" text-sm text-[#ffffffd9] flex items-center">
              Students
              <VscArrowSmallUp className=" text-2xl font-bold" />
              12.56%
            </p>
          </div>
        </div>
        <hr className=" hidden max-lg:block custom-hr" />
        <div className=" w-full flex justify-center py-3">
          <div>
            <h1 className=" text-center text-lg title">45.87M</h1>
            <p className=" text-sm text-[#ffffffd9] flex items-center">
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
