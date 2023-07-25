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


const BarChart = () => {
  let bgTexture = JSON.parse(localStorage.getItem("bgTexture"));
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
        backgroundColor: bgTexture?.white ? "#2563eb":"rgba(218, 244, 250, 0.5)",
        borderColor: "rgb(255, 244, 250)",
        borderWidth: 1,
      },
      {
        label: "2020",
        data: courseYear2020,
        backgroundColor: bgTexture?.white ? "#3b82f6":"rgba(213, 205, 252, 0.5)",
        borderColor: "rgb(213, 205, 255)",
        borderWidth: 1,
      },
      {
        label: "2021",
        data: courseYear2021,
        backgroundColor: bgTexture?.white ? "#60a5fa":"rgba(5, 100, 100, 0.8)",
        borderColor: "rgb(7, 100, 100)",
        borderWidth: 1,
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: "gray",
          font: {
            size: 18,
          },
        },
        position: "top",
        color: "rgba(255, 255, 255, 0.1)",
      },
      title: {
        display: true,
        text: "Popular courses Per Year",
        color: bgTexture?.white ? "#1f1f1e" :"rgb(255, 255, 255)",
        font: {
          size: 20,
        },
      },
    },
    scales: {
      y: {
        grid: {
          color:  bgTexture?.white ? "#d1d5db":"rgba(255, 255, 255, 0.1)",
        },
        beginAtZero: true,
        display: true,
        max: 900,
        ticks: {
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
    <div className="w-full flex justify-center items-center">
      <div className={` w-[95%] ${bgTexture?.white ? "bgTransparent2" : "bgTransparent"} shadow-md flex justify-center rounded`}>
        <Bar options={options} data={data} />
      </div>
    </div>
  );
};

export default BarChart;
