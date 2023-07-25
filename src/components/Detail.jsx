import React from 'react'
import Navbar from './Navbar'
import { StateContextCustom } from './context/StateContext';
import {BsFillPlayCircleFill, BsPeople, BsBarChart, BsPercent, BsCalendarEvent} from "react-icons/bs"
import {HiOutlineClock} from "react-icons/hi"
import {RiDraftLine, RiArtboardLine, RiAwardLine ,RiEyeLine} from "react-icons/ri"
import {AiTwotoneCalendar} from "react-icons/ai"
import {MdPersonOutline} from "react-icons/md"
import {RxCalendar} from "react-icons/rx"
import {TiMessages} from "react-icons/ti"
import {FaArrowLeft} from "react-icons/fa"
import './Theme.css'
import "../pages/Register.css"
import "./detail.css";
import { useNavigate } from 'react-router-dom';

const Detail = () => {
  const { isSidebarOpen } = StateContextCustom();
  const nav = useNavigate();
  const backBtn = () => nav(-1);
  let bgTexture = JSON.parse(localStorage.getItem("bgTexture"));

  return (
    <div className="flex flex-col">
      <div>
        <Navbar />
      </div>
      <div className={`mt-[52px] duration-500 ${isSidebarOpen && " ml-[230px]" } max-lg:ml-0`}>
        <div className=' flex justify-center'>
          <div className={`${bgTexture?.white ? "bgTransparent2 shadow2" : "bgTransparent shadow"} relative w-[92%] my-12 max-xl:my-10 max-lg:my-8 max-sm:my-6 rounded flex justify-between max-xl:flex-col`}>
            {/* back btn */}
            <div onClick={backBtn} className=' absolute max-[500px]:top-1 max-[500px]:left-1 top-3 left-3 z-10 cursor-pointer '>
            <FaArrowLeft className={`${bgTexture?.white ? "text-black" : "text-white"} icon-btn max-[500px]:text-sm`}/>
            </div>
            {/* detail left start */}
            <div className={`flex justify-center w-[45%] max-xl:w-full ${bgTexture?.white ? "text-[#6F6B80] font-bold" : "text-white"}`}>
              <div className=' flex flex-col'>
                {/* image div  */}
                <div className=' relative p-10 max-[500px]:p-5'>
                  <img className=' opacity-80 w-full min-xl:h-[280px] max-xl:w-[900px] rounded-lg' src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2023/03/course-27-1024x551.webp" alt="" />
                  <button className=' absolute top-[40%] left-[45%] text-[50px] max-xl:text-[60px] max-md:text-[50px] max-[600px]:text-[30px] text-white play-btn'><BsFillPlayCircleFill/></button>
                </div>

                {/* detail  */}
                <div className='px-10 max-[500px]:px-5'>
                  <div>
                    <div className='flex justify-between pb-3'>
                      <p className=' flex items-center gap-2'>
                        <span className={`text-lg ${bgTexture?.white && "text-blue-700"}`}><HiOutlineClock/></span>
                        <span className='max-xl:text-lg max-md:text-base max-sm:text-sm tracking-wide'>Duration</span>
                      </p>
                      <p className='max-xl:text-lg max-md:text-base max-sm:text-sm tracking-wide'>17 Weeks</p>
                    </div>
                    <hr className={`${bgTexture?.white ? "border-[] border-black" : "custom-hr"}`} />

                    <div className='flex justify-between py-3'>
                      <p className=' flex items-center gap-2'>
                        <span className={`text-lg ${bgTexture?.white && "text-blue-700"}`}><BsPeople/></span>
                        <span className='max-xl:text-lg max-md:text-base max-sm:text-sm tracking-wide'>Students</span>
                      </p>
                      <p className='max-xl:text-lg max-md:text-base max-sm:text-sm tracking-wide'>189</p>
                    </div>
                    <hr className={`${bgTexture?.white ? "border-[] border-black" : "custom-hr"}`} />

                    <div className='flex justify-between py-3'>
                      <p className=' flex items-center gap-2'>
                        <span className={`text-lg ${bgTexture?.white && "text-blue-700"}`}><RiDraftLine/></span>
                        <span className='max-xl:text-lg max-md:text-base max-sm:text-sm tracking-wide'>Lessons</span>
                      </p>
                      <p className='max-xl:text-lg max-md:text-base max-sm:text-sm tracking-wide'>18</p>
                    </div>
                    <hr className={`${bgTexture?.white ? "border-[] border-black" : "custom-hr"}`} />

                    <div className='flex justify-between py-3'>
                      <p className=' flex items-center gap-2'>
                        <span className={`text-lg ${bgTexture?.white && "text-blue-700"}`}><BsBarChart/></span>
                        <span className='max-xl:text-lg max-md:text-base max-sm:text-sm tracking-wide'>Skill level</span>
                      </p>
                      <p className='max-xl:text-lg max-md:text-base max-sm:text-sm tracking-wide'>Expert</p>
                    </div>
                    <hr className={`${bgTexture?.white ? "border-[] border-black" : "custom-hr"}`} />

                    <div className='flex justify-between py-3'>
                      <p className=' flex items-center gap-2'>
                        <span className={`text-lg ${bgTexture?.white && "text-blue-700"}`}><RiArtboardLine/></span>
                        <span className='max-xl:text-lg max-md:text-base max-sm:text-sm tracking-wide'>Quizzes</span>
                      </p>
                      <p className='max-xl:text-lg max-md:text-base max-sm:text-sm tracking-wide'>0</p>
                    </div>
                    <hr className={`${bgTexture?.white ? "border-[] border-black" : "custom-hr"}`} />

                    <div className='flex justify-between py-3'>
                      <p className=' flex items-center gap-2'>
                        <span className={`text-lg ${bgTexture?.white && "text-blue-700"}`}><RiAwardLine/></span>
                        <span className='max-xl:text-lg max-md:text-base max-sm:text-sm tracking-wide'>Certifications</span>
                      </p>
                      <p className='max-xl:text-lg max-md:text-base max-sm:text-sm tracking-wide'>Yes</p>
                    </div>
                    <hr className={`${bgTexture?.white ? "border-[] border-black" : "custom-hr"}`} />

                    <div className='flex justify-between py-3'>
                      <p className=' flex items-center gap-2'>
                        <span className={`text-lg ${bgTexture?.white && "text-blue-700"}`}><BsPercent/></span>
                        <span className='max-xl:text-lg max-md:text-base max-sm:text-sm tracking-wide'>Pass Percentage</span>
                      </p>
                      <p className='max-xl:text-lg max-md:text-base max-sm:text-sm tracking-wide'>80%</p>
                    </div>
                    <hr className={`${bgTexture?.white ? "border-[] border-black" : "custom-hr"}`} />

                    <div className='flex justify-between py-3'>
                      <p className=' flex items-center gap-2'>
                        <span className={`text-lg ${bgTexture?.white && "text-blue-700"}`}><AiTwotoneCalendar/></span>
                        <span className='max-xl:text-lg max-md:text-base max-sm:text-sm tracking-wide'>Deadline</span>
                      </p>
                      <p className='max-xl:text-lg max-md:text-base max-sm:text-sm tracking-wide'>25 Dec, 2023</p>
                    </div>
                    <hr className={`${bgTexture?.white ? "border-[] border-black" : "custom-hr"}`} />

                    <div className='flex justify-between py-3'>
                      <p className=' flex items-center gap-2'>
                        <span className={`text-lg ${bgTexture?.white && "text-blue-700"}`}><MdPersonOutline/></span>
                        <span className='max-xl:text-lg max-md:text-base max-sm:text-sm tracking-wide'>Instructor</span>
                      </p>
                      <p className='max-xl:text-lg max-md:text-base max-sm:text-sm tracking-wide'>James Carlson</p>
                    </div>
                  </div>

                  {/* price  */}
                  <div className={`${bgTexture?.white ? "bg-blue-700 hover:bg-blue-950 duration-500" : "btn"} text-center py-3 mt-5 text-lg rounded`}>
                    <p className=' select-none max-sm:text-base text-white'>Price $49.00</p>
                  </div>
                </div>
              </div>
            </div>
            {/* detail left end  */}

            {/* detail right start */}
            <div className="w-[55%] max-xl:w-full flex flex-col gap-5 py-10 pr-10 max-xl:pl-10 max-[500px]:px-5">
              <img
                src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2023/03/course-26.webp"
                  className="w-full  rounded-lg opacity-80"
              />
              <div className={`flex justify-between max-[600px]:flex-col max-[600px]:gap-3`}>
                  <div className="flex gap-2 items-center">
                    <img
                      src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/11/instructor-03-02-2-100x100.webp"
                      className=" w-8 rounded-full"
                    />
                    <p className={`${bgTexture?.white ? "text-gray-500" : "tableTitle"} text-sm tracking-wide`}>
                      Janet Fleming
                    </p>
                  </div>
                  <div className={`${bgTexture?.white ? "text-gray-500" : "tableTitle"} flex items-center gap-2`}>
                    <RxCalendar className={`${bgTexture?.white && "text-blue-700"} text-lg`} />
                    <p className="text-sm tracking-wide">09 Feb, 2023</p>
                  </div>
                  <div className={`${bgTexture?.white ? "text-gray-500" : "tableTitle"} flex items-center gap-2`}>
                    <TiMessages className={`${bgTexture?.white && "text-blue-700"} text-lg`} />
                    <p className="text-sm tracking-wide">0 Comments</p>
                  </div>
                  <div className={`${bgTexture?.white ? "text-gray-500" : "tableTitle"} flex items-center gap-1`}>
                    <RiEyeLine className={`${bgTexture?.white && "text-blue-700"} text-lg`} />
                    <p className="text-sm tracking-wide">1 Min Read</p>
                  </div>
              </div>
              <div className=" flex flex-col gap-4">
                  <h1 className={`${bgTexture?.white ? "text-gray-800" : "text-gray-50"} text-2xl font-bold max-xl:text-2xl tracking-wider max-md:text-xl`}>
                    Social Media Marketing MASTERY( A-Z ) Journey
                  </h1>
                  <p className={`${bgTexture?.white ? "text-gray-500" : "tableTitle"} text-sm tracking-wider`}>
                    Grursus mal suada faci lisis Lorem ipsum dolarorit more
                    ametion consectetur elit. Vesti at bulum nec the odio aea the
                    dumm ipsumm ipsum that dolocons rsus mal suada and fadolorit
                    to the consectetur elit. All the Lorem Ipsum generators on the
                    Internet tend to repeat that predefined chunks as necessary
                    making this the first true dummy generator on the
                    Internet.Grursus mal suada faci lisis Lorem ipsum dolarorit
                    more ametion consectetur elit. Vesti at bulum nec odio aea the
                    dumm ipsumm ipsum that dolocons rsus mal suada and fadolorit
                    to the consectetur elit. Grursus mal suada faci lisis Lorem
                    ipsum dolarorit more ametion consectetur elit. Vesti at bulum
                    nec at odio aea the dumm ipsumm ipsum that dolocons rsus mal
                    suada and fadolorit to the consectetur elit. All the Lorem
                    Ipsum generators on the Internet tend.
                  </p>
                  <div className={`${bgTexture?.white ? "bg-white shadow-lg rounded-md border-t-[3px] border-blue-700" : "bg-color"} shadow-lg p-5 rounded`}>
                    <p className={`${bgTexture?.white ? " text-blue-700" : "text-gray-50"} text-lg tracking-wide text-center`}>
                      “ Duis vel scelerisque augue, ut vehicula nisl. Curabitur et
                      mollis tortor, eget sollicitudin lectus. Praesent a ante ac
                      urna ultrices volutpat at sed ligula. Phasellus nibh dui,
                      pulvinar a nibh quis. ”
                    </p>
                  </div>
                  <p className={`${bgTexture?.white ? "text-gray-500" : "tableTitle"} text-sm tracking-wider`}>
                    Grursus mal suada faci lisis Lorem ipsum dolarorit more
                    ametion consectetur elit. Vesti at bulum nec the odio aea the
                    dumm ipsumm ipsum that dolocons rsus mal suada and fadolorit
                    to the consectetur elit. All the Lorem Ipsum generators on the
                    Internet tend to repeat that predefined chunks as necessary
                    making this the first true dummy generator on the
                    Internet.Grursus mal suada faci lisis Lorem ipsum dolarorit
                    more ametion consectetur elit.
                  </p>
              </div>
              
            </div>
            {/* detail right end */}
          </div>
        </div>
       </div>
     </div>
  );
};

export default Detail;
