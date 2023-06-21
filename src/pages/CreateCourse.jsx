import React, { useRef } from "react";
import { BiMovie } from "react-icons/bi";
import { Link } from "react-router-dom";
import './Register.css';
import './CreateCourse.css';

const CreateCourse = () => {
  const inputCover = useRef();
  const inputVideo = useRef();
  return (
    <div>
      <div className="flex justify-center ">
        <div className=" w-[95%] max-[900px]:w-[95% max-[900px]:w-[94%] max-[600px]:w-[92%] mt-10 mb-6 bgTransparent">
          <form className=" mx-10 max-sm:mx-5 mb-16">
            <h1 className=" text-4xl text-white text-shadow my-10 max-[435px]:text-3xl max-[380px]:text-2xl createFamily tracking-wide">
              Create New Course
            </h1>
            <div className=" flex flex-col">
              <div className=" flex max-[900px]:flex-col max-[900px]:gap-5 gap-9 items-center max-[900px]:items-start">
                <div className=" w-[30%] max-[900px]:w-[50%] max-[700px]:w-[70%] max-[600px]:w-[80%] max-[500px]:w-[100%]">
                  <div
                    onClick={() => {
                      inputCover.current.click();
                      console.log("click");
                    }}
                    className=" custom-input cursor-pointer w-full h-[370px] max-xl:h-[350px] rounded-md flex justify-center items-center">
                    <p className="subtitle">Upload cover</p>
                    <input
                      id="cover"
                      className=" w-full h-[370px] "
                      type="file"
                      ref={inputCover}
                      hidden
                    />
                  </div>
                </div>

                <div className=" w-[70%] max-[900px]:w-full">
                    <div className='flex flex-col gap-8 max-[900px]:gap-5'>
                        <div className=' flex flex-col gap-7 max-[900px]:gap-5'>
                          <input className='   py-3 pl-4 custom-input rounded-md' type='text' placeholder="Title"/>
                          <input className='  custom-input pt-4 pb-20  pl-4 rounded-md' type='text' placeholder="Description"/>

                          <div className=' flex gap-5 w-[100%] max-[700px]:flex-col'>
                            <input className='  custom-input w-full py-3 pl-4 rounded-md' type='number' placeholder="Duration" />
                            <input className='  custom-input w-full py-3 pl-4 rounded-md' type='number' placeholder="Lessons" />
                            <input className='  custom-input w-full py-3 pl-4 rounded-md' type='text' placeholder="Language" />
                            <input className='  custom-input w-full py-3 pl-4 rounded-md' type='number' placeholder="Price" />
                          </div>
                        </div>
                        <input className='  custom-input py-3 pl-4 rounded-md' type='text' placeholder='Instructor'/>
                    </div>
                </div>
              </div>

              <div
                onClick={() => inputVideo.current.click()}
                className=" custom-input flex justify-between cursor-pointer w-full mb-8 max-[900px]:mb-5 mt-8 max-[900px]:mt-5 py-4 pl-4 mr-1  border-[#e5eaef] rounded-md">
                <p className="subtitle">Upload video</p>
                <input
                  className=" w-[900px] border"
                  type="file"
                  ref={inputVideo}
                  hidden
                />
                <p className=" text-xl pr-4 subtitle">
                  <BiMovie />
                </p>
              </div>
            </div>

            <Link to="/">
              <button className=" glass-btn py-4 px-20 max-[400px]:py-3 max-[400px]:px-14 text-lg rounded-md text-white">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Create
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateCourse;
