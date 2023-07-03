import React from "react";
import { HiOutlineMailOpen } from "react-icons/hi";
import "./Register.css";
import { Link } from "react-router-dom";

const ResetPassword = () => {
  return (
    <div className="flex justify-center h-screen items-center">
      <form className="w-96 max-[450px]:w-[90%] flex flex-col bgTransparent shadow gap-5 rounded">
        <h1 className=" font-medium text-white mt-7 mx-7 tracking-wide">
          RESET PASSWORD
        </h1>
        <p className=" text-sm text-white tracking-wider mx-7 opacity-80 leading-6">
          Please enter your email address. You will receive a link to create a
          new password via email.
        </p>
        <div className="flex flex-col gap-2">
          <label
            htmlFor=""
            className=" text-[13px] font-medium text-white opacity-80 mx-7"
          >
            EMAIL ADDRESS
          </label>
          <div className="relative flex flex-col mx-7">
            <input
              type="email"
              placeholder="Email Address"
              className="custom-input px-3 py-[10px] rounded"
            />
            <HiOutlineMailOpen className="text-white opacity-80 text-lg absolute top-[10px] right-4" />
          </div>
          <button className="btn mt-3 font-medium mx-7 tracking-wider text-white text-xs shadow-md py-[10px] rounded">
            RESET PASSWORD
          </button>
          <hr className=" opacity-30 mt-4" />
          <div className="mb-5 mt-3 flex gap-3 mx-auto">
            <h2 className=" text-orange-400 text-sm tracking-wider">
              Return to the
            </h2>
            <Link to={'/login'}>
              <h2 className=" text-white text-sm cursor-pointer tracking-wider">
                Sign In
              </h2>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ResetPassword;
