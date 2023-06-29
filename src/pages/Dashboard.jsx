import React from "react";
import Progress from "../components/dashboard-componentes/Progress";
import LineChart from "../components/dashboard-componentes/LineChart";
import DoughnutChart from "../components/dashboard-componentes/DoughnutChart";


const Dashboard = () => {
  return (
    <>
        <div className=" flex flex-col gap-7">
              <Progress />
              <div className={`w-[95%] flex max-lg:flex-col mx-auto gap-7 mb-7`}>
                <LineChart />
                <DoughnutChart />
              </div>
        </div>
    </>
  );
};
export default Dashboard;
