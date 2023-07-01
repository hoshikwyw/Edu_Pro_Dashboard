import React from "react";
import errorimg from "../assets/errorimg.png";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div className=" h-screen ">
      <div className=" flex flex-col items-center justify-center gap-10 pt-20 ">
        <p className=" text-center text-3xl font-extrabold text-[#ffffffea]">
          Sorry ! Page not found
        </p>
        <img className=" skew-y-6 w-72" src={errorimg} alt="" />
        <Link to={"/"} className=" flex justify-center">
          <button className=" animate-bounce bg-[#ffffff17] py-2 px-6 rounded shadow-lg font-bold text-[#ffffffe3] tracking-wide  ">
            Go Back Home
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Error;
