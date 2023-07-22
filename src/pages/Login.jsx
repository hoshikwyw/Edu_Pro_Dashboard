import React, { useState } from "react";
import "./Register.css";
import { SlUser } from "react-icons/sl";
import { BiLock } from "react-icons/bi";
import { RiFacebookBoxFill } from "react-icons/ri";
import { FaTwitterSquare } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../redux/api/authApi";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/authSlice";
import { Loader } from '@mantine/core';
import logo from "../assets/edu-logo/logo.png";
// import eduText from "../assets/edu-logo/edu-text.png";

const Login = () => {
  const [email,setEmail] = useState("teamC@gmail.com")
  const [password,setPassword] = useState("teamc12345")
  const [login, {isLoading}] = useLoginMutation()
  const dispatch = useDispatch()
  const nav = useNavigate()
  let bgTexture = JSON.parse(localStorage.getItem("bgTexture"));

  const loginHandler = async(event)=>{
    try{
      event.preventDefault()
      const user = {email,password}
      // console.log(user)
      const {data} = await login(user)
      // console.log(data);
      dispatch(addUser({user:data?.user, token:data?.token}))
      if(data?.success){
        nav('/')
      }
    }catch(error){
      console.log(error);
    }
  }
  return (
    <div className="flex justify-center max-sm:h-full max-sm:py-10 h-screen items-center">
      <form onSubmit={loginHandler} className={`mx-auto w-96 max-[450px]:w-[90%] max-[350px]:gap-3 flex flex-col ${bgTexture?.white ? "bgTransparent2 shadow2" : "bgTransparent shadow"} gap-5 rounded`}>
        <div className="mx-auto mt-7">
          <img
            src={logo}
            className=""
          />
        </div>
        <h1 className={`text-center ${bgTexture?.white ? "text-black" : "text-white"} font-medium`}>SIGN IN</h1>
        <div className="flex flex-col mx-7 gap-4">
          <div className="relative flex flex-col">
            <input onChange={(e)=> setEmail(e.target.value)}
              value={email}
              type="text"
              placeholder="Enter Your Email"
              className={`${bgTexture?.white ? "custom-input2" : "custom-input"} px-3 py-[10px] rounded`}
            />
            <SlUser className={`${bgTexture?.white ? "text-black" : "text-white opacity-80"} absolute top-[10px] right-[17px]`} />
          </div>
          <div className="relative flex flex-col">
            <input onChange={(e)=> setPassword(e.target.value)}
              value={password}
              type="password"
              placeholder="Choose Password"
              className={`${bgTexture?.white ? "custom-input2" : "custom-input"} px-3 py-[10px] rounded`}
            />
            <BiLock className={`${bgTexture?.white ? "text-black" : "text-white opacity-80"} text-lg absolute top-[10px] right-4`} />
          </div>
        </div>
        <div className="flex max-[350px]:flex-col max-[350px]:gap-3 items-center justify-between mx-7">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="termsCheckbox"
              aria-label="REMEMBER ME"
              checked
              className={`${bgTexture?.white ? "custom-checkbox2" : "custom-checkbox"}`}
            />
            <label
              htmlFor="termsCheckbox"
              className={`${bgTexture?.white ? " text-black" : " text-gray-200"} text-xs tracking-widest cursor-pointer`}
            >
              REMEMBER ME
            </label>
          </div>
          <Link to={'/resetPassword'}>
            <p className={`${bgTexture?.white ? " text-black font-medium" : " text-white"} cursor-pointer tracking-wider text-sm`}>
              Reset Password
            </p>
          </Link>
        </div>
        {isLoading ? <button disabled={isLoading && true} className={`${bgTexture?.white ? "bg-blue-700 hover:bg-blue-950 duration-500" : "btn"} font-medium mx-7 tracking-wider text-white text-xs shadow-md h-9 rounded flex items-center justify-center gap-2`}>
          SIGN IN <Loader color="white" size="xs"/>
        </button> : <button disabled={isLoading && true} className={`${bgTexture?.white ? "bg-blue-700 hover:bg-blue-950 duration-500" : "btn"} font-medium mx-7 tracking-wider text-white text-xs shadow-md py-[10px] rounded`}>
          SIGN IN 
        </button> }
        <h2
          className={`${bgTexture?.white ? "text-black font-medium" : "text-white opacity-80"} text-center tracking-wider
         text-sm `}
        >
          Sign In With
        </h2>
        <div className="mx-7 flex max-[350px]:flex-col max-[350px]:gap-4 justify-between">
          <button className={`${bgTexture?.white ? "bg-blue-700 hover:bg-blue-950 duration-500" : "btn"} max-[350px]:w-full flex gap-1 justify-center items-center tracking-wider w-[48%] text-white text-xs font-medium shadow-md py-[10px] rounded`}>
            <span>
              <RiFacebookBoxFill className=" mb-[2px] text-[14px]" />
            </span>
            FACEBOOK
          </button>
          <button className={`${bgTexture?.white ? "bg-blue-700 hover:bg-blue-950 duration-500" : "btn"} max-[350px]:w-full flex gap-1 font-medium justify-center items-center tracking-wider w-[48%] text-white text-xs shadow-md py-[10px] rounded`}>
            <span>
            </span>
              <FaTwitterSquare className=" mb-[2px]" />
            TWITTER
          </button>
        </div>
        <hr className=" opacity-30 mt-2" />
        <div className="mb-5 flex max-[350px]:flex-col gap-3 mx-auto">
          <h2 className={`${bgTexture?.white ? "text-blue-600 font-medium" : "text-orange-400"} text-sm tracking-wider`}>
            Do not have an account?
          </h2>
          <Link to={"/register"}>
            <h2 className={`${bgTexture?.white ? " text-black font-medium" : " text-white"} text-sm cursor-pointer tracking-wider max-[350px]:mx-auto`}>
              Sign Up here
            </h2>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
