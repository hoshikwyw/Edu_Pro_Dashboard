import React from "react";
import Progress from "../components/dashboard-componentes/Progress";
import LineChart from "../components/dashboard-componentes/LineChart";
import DoughnutChart from "../components/dashboard-componentes/DoughnutChart";
import { StateContextCustom } from "../components/context/StateContext";
import Navbar from "../components/Navbar";

import Feedback from "../components/dashboard-componentes/Feedback";
import Smallcalendar from "../components/dashboard-componentes/Smallcalendar";

import BarChart from "../components/dashboard-componentes/BarChart";

const Dashboard = () => {
  const { isSidebarOpen } = StateContextCustom();
  return (
    <>
      <div className="flex flex-col">
        <div>
          <Navbar />
        </div>

        <div
          className={`mt-[52px] duration-500 ${
            isSidebarOpen && " ml-[230px]"
          } max-lg:ml-0`}>
          <div className=" flex flex-col gap-7">
            <Progress />

            <div className={`w-[95%] flex max-lg:flex-col mx-auto gap-7`}>
              <LineChart />
              <DoughnutChart />
            </div>

            {/* <BarChart /> */}

            <div className="">
              <Smallcalendar />
            </div>

            <div className="mt-5">
              <Feedback />
            </div>
            
          </div>
        </div>

      </div>
    </>
  );
};
export default Dashboard;
