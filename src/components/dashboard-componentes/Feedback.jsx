import React from "react";
import maleStudent from "../../assets/maleStudent (2).jpg";
import femaleStudent from "../../assets/femaleStudent.jpg";
import { Rating, Pagination } from "@mantine/core";
import "./feedback.css";
import "../../pages/register.css"

const Feedback = () => {
  let bgTexture = JSON.parse(localStorage.getItem("bgTexture"));

  return (
    <div className="flex mx-auto w-[95%] ">
      <div className="">
        <h2 className=" ms-3 text-[#ffffffb6] font-semibold tracking-wider text-xl">
          What Our Students Says
        </h2>
        <h2 className=" ms-3 text-[#ffffff98] mt-3">
          Here are the some feedbacks of what our students say about us...
        </h2>
        {/* main card control  */}
        <div className=" my-5 flex flex-col lg:flex-row gap-4">
          {/* first card  */}
          <div className={`py-5 px-5 ${bgTexture?.white ? "bgTransparent2" : "bgTransparent"} rounded shadow-md hover:shadow-slate-700 hover:skew-y-1`}>
            {/* headline */}
            <div className=" flex gap-5 items-center">
              <img src={maleStudent} alt="" className=" w-14 rounded-full" />
              <div className={`${bgTexture?.white ? " text-blue-700" : "text-[#ffffffbe]"} text-lg tracking-wide`}>
                <h2>John Doe</h2>
                <h2>Frontend Class</h2>
              </div>
            </div>
            <Rating defaultValue={5} className=" my-3" />
            <p className={`${bgTexture?.white ? " text-[#000]" : "text-[#ffffff98]"}`}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis,
              rem exercitationem! Explicabo iste quos pariatur libero animi quod
              expedita.
            </p>
          </div>
          {/* second card  */}
          <div className={`py-5 px-5 ${bgTexture?.white ? "bgTransparent2" : "bgTransparent"} rounded shadow-md hover:shadow-slate-700 hover:skew-y-1`}>
            {/* headline */}
            <div className=" flex gap-5 items-center">
              <img src={femaleStudent} alt="" className=" w-14 rounded-full" />
              <div className={`${bgTexture?.white ? " text-blue-700" : "text-[#ffffffbe]"} text-lg tracking-wide`}>
                <h2>Suzy</h2>
                <h2>Designer Class</h2>
              </div>
            </div>
            <Rating defaultValue={5} className=" my-3" />
            <p className={`${bgTexture?.white ? " text-[#000]" : "text-[#ffffff98]"}`}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis,
              rem exercitationem! Explicabo iste quos pariatur libero animi quod
              expedita.
            </p>
          </div>
          {/* third card  */}
          <div className={`py-5 px-5 ${bgTexture?.white ? "bgTransparent2" : "bgTransparent"} rounded shadow-md hover:shadow-slate-700 hover:skew-y-1`}>
            {/* headline */}
            <div className=" flex gap-5 items-center">
              <img src={maleStudent} alt="" className=" w-14 rounded-full" />
              <div className={`${bgTexture?.white ? " text-blue-700" : "text-[#ffffffbe]"} text-lg tracking-wide`}>
                <h2>Aung Aung</h2>
                <h2>Backend Class</h2>
              </div>
            </div>
            <Rating defaultValue={5} className=" my-3" />
            <p className={`${bgTexture?.white ? " text-[#000]" : "text-[#ffffff98]"}`}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis,
              rem exercitationem! Explicabo iste quos pariatur libero animi quod
              expedita.
            </p>
          </div>
        </div>
        <div className=" flex justify-center mb-8">
          <button className={`${bgTexture?.white ? "bg-blue-700 hover:bg-blue-950 duration-500 text-white" : "bgTransparent hover:text-[#ffff] hover:animate-bounce text-[#ffffffaf]"}  px-4 py-1 rounded shadow-md text-lg font-semibold `}>
            See More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
