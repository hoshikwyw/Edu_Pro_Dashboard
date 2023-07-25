import React, { useRef, useState } from "react";
import { BiMovie } from "react-icons/bi";
import { Link } from "react-router-dom";
import "./Register.css";
import "./CreateCourse.css";
import Navbar from "../components/Navbar";
import { StateContextCustom } from "../components/context/StateContext";
import EditorFun from "../components/TextEditor/EditorFun";

const CreateCourse = () => {
  let bgTexture = JSON.parse(localStorage.getItem("bgTexture"));

  const inputCover = useRef();
  const inputVideo = useRef();
  const [value, setValueF] = useState("");
  const { isSidebarOpen } = StateContextCustom();
  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log(value);
  };
  console.log(value);

  return (
    <>
      <div id="body" className="flex flex-col">
        <div>
          <Navbar />
        </div>

        <div
          className={`mt-[52px] duration-500 ${
            isSidebarOpen && " ml-[230px]"
          } max-lg:ml-0`}>
          <div className="flex justify-center ">
            <div className={` w-[95%] max-[900px]:w-[95% max-[900px]:w-[94%] max-[600px]:w-[96%] mt-10 mb-6 ${bgTexture?.white ? "bgTransparent2 shadow2" : "bgTransparent shadow"}`}>
              <form
                onSubmit={onSubmitHandler}
                className=" mx-10 max-sm:mx-5 mb-8">
                <h1 className={`text-4xl my-10 max-[900px]:my-5 ${bgTexture?.white ? "text-[#525fe1]" : "text-white text-shadow createFamily"}  max-[435px]:text-3xl max-[380px]:text-2xl tracking-wide`}>
                  Create New Course
                </h1>
                <div className=" flex flex-col">
                  <div className=" flex max-[900px]:flex-col max-[900px]:gap-5 gap-9 max-[900px]:items-start">
                    <div className=" w-[30%] max-[900px]:w-[50%] max-[700px]:w-[70%] max-[600px]:w-[80%] max-[500px]:w-[100%]">
                      <div
                        onClick={() => {
                          inputCover.current.click();
                          console.log("click");
                        }}
                        className={` ${bgTexture?.white ? "custom-input2" : "custom-input"} cursor-pointer w-full h-[370px] max-xl:h-[350px] rounded-md flex justify-center items-center`}>
                        <p className={`${bgTexture?.white ? " text-[#9ca3af]" : " text-[#bebebe]"} text-base`}>Upload cover</p>
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
                      <div className="flex flex-col gap-8 max-[900px]:gap-5">
                        <div className=" flex flex-col gap-8 max-[900px]:gap-5">
                          <input
                            className={` py-3 pl-4 ${bgTexture?.white ? "custom-input2" : "custom-input"} rounded-md`}
                            type="text"
                            placeholder="Title"
                          />
                          {/* <input
                            className="  custom-input pt-4 pb-20  pl-4 rounded-md"
                            type="text"
                            id="idText"
                            placeholder="Description"
                          /> */}
                          {/* <div className="custom-input pt-4 pb-2 pl-4 rounded-md flex justify-center">
                            <div className="w-[98%]">
                              <EditorFun setValueF={setValueF} />
                            </div>
                          </div> */}
                            
                          <input
                          className={`${bgTexture?.white ? "custom-input2" : "custom-input"} py-3 pl-4 rounded-md`}
                          type="text"
                          placeholder="Instructor"
                        />

                          <div className=" flex gap-5 w-[100%] max-[700px]:flex-col">
                            <input
                              className={`${bgTexture?.white ? "custom-input2" : "custom-input"} w-full py-3 pl-4 rounded-md`}
                              type="number"
                              placeholder="Duration"
                            />
                            <input
                              className={`${bgTexture?.white ? "custom-input2" : "custom-input"} w-full py-3 pl-4 rounded-md`}
                              type="number"
                              placeholder="Lessons"
                            />
                            <input
                              className={`${bgTexture?.white ? "custom-input2" : "custom-input"} w-full py-3 pl-4 rounded-md`}
                              type="text"
                              placeholder="Language"
                            />
                            <input
                              className={`${bgTexture?.white ? "custom-input2" : "custom-input"} w-full py-3 pl-4 rounded-md`}
                              type="number"
                              placeholder="Price"
                            />
                          </div>

                          <input
                            className={`py-3 pl-4 ${bgTexture?.white ? "custom-input2" : "custom-input"} rounded-md`}
                            type="text"
                            placeholder="Skill level"
                          />
                        </div>
                       
                        <div
                              onClick={() => inputVideo.current.click()}
                              className={`${bgTexture?.white ? "custom-input2" : "custom-input"} flex justify-between cursor-pointer w-full py-5 max-xl:py-3 max-[900px]:py-5 pl-4 mr-1  border-[#e5eaef] rounded-md`}>
                              <p className={`${bgTexture?.white ? " text-[#9ca3af]" : " text-[#bebebe]"}`}>Upload video</p>
                              <input
                                className={` py-3 pl-4 ${bgTexture?.white ? "custom-input2" : "custom-input"} rounded-md`}
                                type="file"
                                ref={inputVideo}
                                hidden
                              />
                              <p className={`text-xl pr-4 ${bgTexture?.white ? " text-[#9ca3af]" : " text-[#bebebe]"}`}>
                                <BiMovie />
                              </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <div
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
                  </div> */}

                  <div className=" custom-input pt-4 pb-2 pl-4 rounded-md flex justify-center my-8 max-[900px]:my-5">
                      <div className="w-[98%]">
                          <EditorFun setValueF={setValueF} />
                      </div>
                  </div>
                </div>

                {/* <Link to="/"> */}
                <button
                  id="submit"
                  className={`${bgTexture?.white ? "bg-blue-700 hover:bg-blue-950 duration-500" : "glass-btn"}  py-4 px-20 max-[400px]:py-3 max-[400px]:px-14 text-lg rounded-md text-white`}>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  Create
                </button>
                {/* </Link> */}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateCourse;
