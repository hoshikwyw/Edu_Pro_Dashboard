import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
// import { Bar } from "react-chartjs-2";

import { Bar } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const courseName = ["A", "B", "C", "D"];
const courseYear2019 = [200, 300, 400, 500];
const courseYear2020 = [100, 300, 600, 500];
const courseYear2021 = [700, 600, 700, 500];

const data = {
  labels: courseName,

  datasets: [
    {
      label: "2019",
      data: courseYear2019,
      backgroundColor: "rgba(218, 244, 250, 0.5)",
      borderColor: "rgb(255, 244, 250)",
      borderWidth: 1,
    },
    {
      label: "2020",
      data: courseYear2020,
      backgroundColor: "rgba(213, 205, 252, 0.5)",
      borderColor: "rgb(213, 205, 255)",
      borderWidth: 1,
    },
    {
      label: "2021",
      data: courseYear2021,
      backgroundColor: "rgba(5, 100, 100, 0.8)",
      borderColor: "rgb(7, 100, 100)",
      borderWidth: 1,
    },
  ],
};
export const options = {
  responsive: true,
  plugins: {
    legend: {
      labels: {
        color: "gray",
        font: {
          size: 12,
        },
      },
      position: "top",
      color: "rgba(255, 255, 255, 0.1)",
    },
    title: {
      display: true,
      text: "Popular courses Per Year",
      color: "rgb(255, 255, 255)",
      font: {
        size: 20,
      },
    },
  },
  scales: {
    y: {
      grid: {
        color: "rgba(255, 255, 255, 0.1)",
      },
      beginAtZero: true,
      display: true,
      max: 900,
      ticks: {
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

const BarChart = () => {
  return (
    <div className="w-full flex justify-center flex-col items-center gap-2 md:gap-3 lg:gap-5 ">
      <h1 className=" title  md:text-xl lg:text-2xl ">
        Popular courses per Year
      </h1>
      <div className=" w-[95%] bgTransparent flex justify-center rounded   ">
        <Bar options={options} data={data} />
      </div>
    </div>
  );
};

export default BarChart;
