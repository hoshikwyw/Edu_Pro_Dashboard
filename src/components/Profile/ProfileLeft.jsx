import React from "react";
import "./Profile.css";
import HTMLLogo from "../../assets/html5.svg";
import BootStrapLogo from "../../assets/bootstrap-4.svg";
import AngularJS from "../../assets/angular-icon.svg";
import ReactLogo from "../../assets/react.svg";
import { FiFacebook, FiTwitter } from "react-icons/fi";
import { GrGooglePlus } from "react-icons/gr";
import men from "../../assets/istockphoto-1153387473-612x612.jpg";

const ProfileLeft = () => {
  return (
    <div className=" relative h-full w-full  lg:p-5 flex justify-center items-center  overflow-hidden">
      <div className="h-[95%] w-full justify-center bgTransparent rounded">
        {/* Profile */}
        <div className=" select-none relative  lg:h-[40%] md:h-[43%] h-[35%]   w-full  overflow-hidden ">
          <div className="absolute top-[-50%] right-[0%] md:h-[250px]  md:top-[-36%] white-transparent borderDesign bg-orange-700 "></div>
          <div className=" lg:absolute md:absolute lg:pt-0 md:pt-0 pt-6 right-[30%] top-[20%]  md:top-[20%] md:right-[40%]  flex justify-center flex-col items-center lg:gap-y-5 gap-y-0 md:gap-y-5    lg:top-[10%] lg:right-[40%]">
            <div className="relative h-[130px] w-[130px] flex justify-center items-center overflow-hidden   rounded-[50%] bg-pink-700 ">
              <div className=" z-10 w-[94%] h-[94%] bg-black rounded-[50%]">
                <img
                  src={men}
                  alt=""
                  className="w-full h-full  object-cover rounded-[50%]"
                />
              </div>
              <div className="backgroundNeon  absolute  top-0 left-0 w-full h-full"></div>
            </div>
            <h1 className=" text-blue-500 text-xl">Holy </h1>
            <div className="   flex justify-center gap-8 items-center">
              <FiFacebook className=" text-orange-500 text-xl" />
              <FiTwitter className=" text-orange-500 text-lg" />
              <GrGooglePlus className=" text-orange-500 text-2xl" />
            </div>
          </div>
        </div>

        {/* icon */}
        <div
          className=" select-none h-[60%] w-full  py-5 px-4 flex  flex-col gap-y-6 lg:justify-end md:justify-end justify-center
        ">
          <div className=" w-full h-[60px] flex items-center justify-center pb-4 gap-5 borderCustom  ">
            <div className="  w-[10%] h-full overflow-hidden flex flex-col justify-center items-center">
              <img src={HTMLLogo} alt="" className=" w-[36px] h-[36px] " />
            </div>
            <div className="w-[80%] flex flex-col gap-y-3">
              <div className=" flex justify-between ">
                <p className=" title">HTML 5</p>
                <p className="title">65%</p>
              </div>
              <div className=" progressBackground  w-full">
                <div className=" progressBar w-[80%] bg-blue-500"></div>
              </div>
            </div>
          </div>
          <div className=" w-full flex items-center justify-center gap-5 pb-4 borderCustom  ">
            <div className="  w-[10%] h-full overflow-hidden flex flex-col justify-center items-center">
              <img src={BootStrapLogo} alt="" className=" w-[36px] h-[36px] " />
            </div>
            <div className="w-[80%] flex flex-col gap-y-3">
              <div className=" flex justify-between ">
                <p className=" title">BootStrap 5</p>
                <p className=" title">40%</p>
              </div>
              <div className=" progressBackground w-full ">
                <div className=" progressBar w-[40%] bg-blue-500"></div>
              </div>
            </div>
          </div>
          <div className=" w-full flex items-center justify-center gap-5 pb-4 borderCustom  ">
            <div className="  w-[10%] h-full overflow-hidden flex flex-col justify-center items-center">
              <img src={AngularJS} alt="" className=" w-[36px] h-[36px] " />
            </div>
            <div className="w-[80%] flex flex-col gap-y-3">
              <div className=" flex justify-between ">
                <p className=" title">AngularJS</p>
                <p className=" title">70%</p>
              </div>
              <div className=" progressBackground w-full ">
                <div className=" progressBar w-[70%] bg-blue-500"></div>
              </div>
            </div>
          </div>
          <div className=" w-full flex items-center justify-center gap-5 pb-4 ">
            <div className="  w-[10%] h-full overflow-hidden flex flex-col justify-center items-center">
              <img src={ReactLogo} alt="" className=" w-[36px] h-[36px] " />
            </div>
            <div className="w-[80%] flex flex-col gap-y-3">
              <div className=" flex justify-between ">
                <p className=" title">ReactJS</p>
                <p className=" title">80%</p>
              </div>
              <div className=" progressBackground w-full ">
                <div className=" progressBar w-[80%] bg-blue-500"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileLeft;
