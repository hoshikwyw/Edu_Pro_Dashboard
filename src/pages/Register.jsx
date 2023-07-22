import React,{useState} from "react";
import "./Register.css";
import { SlUser } from "react-icons/sl";
import { HiOutlineMailOpen } from "react-icons/hi";
import { BiLock } from "react-icons/bi";
import { RiFacebookBoxFill } from "react-icons/ri";
import { FaTwitterSquare } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useRegisterMutation } from "../redux/api/authApi";
import { Loader } from '@mantine/core';
import logo from "../assets/edu-logo/logo.png";

const Register = () => {
  const [name,setName] = useState()
  const [email,setEmail] = useState()
  const [password,setPassword] = useState()
  const [password_confirmation,setPassword_confirmation] = useState()
  const [register, {isLoading}] = useRegisterMutation()
  const nav = useNavigate()

  const registerHandler = async(event)=>{
    try{
      event.preventDefault()
      const user = {name, email, password, password_confirmation}
      // console.log(user)
      const {data} = await register(user)
      // console.log(data)
      if(data?.success){
        nav('/login')
      }
    }catch(error){
      console.log(error)
    }
  }

  return (
    <div className="flex justify-center h-screen items-center">
      <form onSubmit={registerHandler} className=" w-96 max-[450px]:w-[90%] max-[350px]:gap-3 flex flex-col bgTransparent shadow gap-5 rounded">
        <div className="mx-auto mt-5">
          <img
            src={logo}
            className=""
          />
        </div>
        <h1 className="text-center text-white font-medium">SIGN UP</h1>
        <div className="flex flex-col mx-7 gap-4">
          <div className="relative flex flex-col">
            <input onChange={(e)=> setName(e.target.value)}
              value={name}
              type="text"
              placeholder="Enter Your Name"
              className="custom-input px-3 py-[10px] rounded"
            />
            <SlUser className="text-white opacity-80 absolute top-[10px] right-[17px]" />
          </div>
          <div className="relative flex flex-col">
            <input onChange={(e)=> setEmail(e.target.value)}
              value={email}
              type="email"
              required
              placeholder="Enter Your Email ID"
              className="custom-input px-3 py-[10px] rounded"
            />
            <HiOutlineMailOpen className="text-white opacity-80 text-lg absolute top-[10px] right-4" />
          </div>
          <div className="relative flex flex-col">
            <input onChange={(e)=> setPassword(e.target.value)}
              value={password}
              required
              type="password"
              placeholder="Password"
              className="custom-input px-3 py-[10px] rounded"
            />
            <BiLock className="text-white opacity-80 text-lg absolute top-[10px] right-4" />
          </div>
          <div className="relative flex flex-col">
            <input onChange={(e)=> setPassword_confirmation(e.target.value)}
              value={password_confirmation}
              required
              type="password"
              placeholder="Password Confirmation"
              className="custom-input px-3 py-[10px] rounded"
            />
            <BiLock className="text-white opacity-80 text-lg absolute top-[10px] right-4" />
          </div>
        </div>
        <div className="flex items-center mx-7">
          <input
            type="checkbox"
            id="termsCheckbox"
            aria-label="I AGREE WITH TERMS & CONDITIONS"
            className="custom-checkbox"
          />
          <label
            htmlFor="termsCheckbox"
            className="text-gray-200 text-xs tracking-widest cursor-pointer"
          >
            I AGREE WITH TERMS & CONDITIONS
          </label>
        </div>
        {isLoading ? <button disabled={isLoading && true} className="btn font-medium mx-7 tracking-wider text-white text-xs shadow-md h-9 rounded flex items-center justify-center gap-2">
          SIGN IN <Loader color="white" size="xs"/>
        </button> : <button disabled={isLoading && true} className="btn font-medium mx-7 tracking-wider text-white text-xs shadow-md py-[10px] rounded">
          SIGN UP
        </button> }
        <h2
          className=" text-white text-center opacity-80 tracking-wider
         text-sm"
        >
          Sign Up With
        </h2>
        <div className="mx-7 flex max-[350px]:flex-col max-[350px]:gap-4 justify-between">
          <button className="btn max-[350px]:w-full flex gap-1 justify-center items-center tracking-wider w-[48%] text-white text-xs font-medium shadow-md py-[10px] rounded">
            <span>
              <RiFacebookBoxFill className=" mb-[2px] text-[14px]" />
            </span>
            FACEBOOK
          </button>
          <button className="btn max-[350px]:w-full flex gap-1 font-medium justify-center items-center tracking-wider w-[48%] text-white text-xs shadow-md py-[10px] rounded">
            <span>
              <FaTwitterSquare className=" mb-[2px]" />
            </span>
            TWITTER
          </button>
        </div>
        <hr className=" opacity-30 mt-2" />
        <div className="mb-5 flex max-[350px]:flex-col gap-3 mx-auto">
          <h2 className=" text-orange-400 text-sm tracking-wider">
            Already have an account?
          </h2>
          <Link to={'/login'}>
            <h2 className=" text-white text-sm cursor-pointer tracking-wider max-[350px]:mx-auto">
              Sign In here
            </h2>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
