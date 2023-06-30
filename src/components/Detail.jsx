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
import './Theme.css'
import "../pages/Register.css"
import "./detail.css";

const Detail = () => {
  const { isSidebarOpen } = StateContextCustom();
  return (
    <div className="flex flex-col">
      <div>
        <Navbar />
      </div>
      <div className={`mt-[52px] duration-500 ${isSidebarOpen && " ml-[230px]" } max-lg:ml-0`}>
        <div className=' flex justify-center'>
          <div className=" bgTransparent w-[95%] my-10 rounded flex justify-between ">
            {/* detail left start */}
            <div className=' flex justify-center w-[45%] text-white'>
              <div className=' flex flex-col'>
                {/* image div  */}
                <div className=' relative p-10 '>
                  <img className=' w-[500px] h-[240px] rounded' src="	https://eduvibe.devsvibe.com/main/wp-content/themes/eduvibe/assets/images/course-preview.png" alt="" />
                  <p className=' absolute top-[40%] left-[45%] text-[50px]'><BsFillPlayCircleFill/></p>
                </div>

                {/* detail  */}
                <div className='px-10 pb-10'>
                  <div>
                    <div className='flex justify-between text-lg pb-3'>
                      <p className=' flex items-center gap-2'>
                        <span><HiOutlineClock/></span>
                        <span>Duration</span>
                      </p>
                      <p>17 Weeks</p>
                    </div>
                    <hr className='custom-hr' />

                    <div className='flex justify-between text-lg py-3'>
                      <p className=' flex items-center gap-2'>
                        <span><BsPeople/></span>
                        <span>Students</span>
                      </p>
                      <p>189</p>
                    </div>
                    <hr className='custom-hr' />

                    <div className='flex justify-between text-lg py-3'>
                      <p className=' flex items-center gap-2'>
                        <span><RiDraftLine/></span>
                        <span>Lessons</span>
                      </p>
                      <p>18</p>
                    </div>
                    <hr className='custom-hr' />

                    <div className='flex justify-between text-lg py-3'>
                      <p className=' flex items-center gap-2'>
                        <span><BsBarChart/></span>
                        <span>Skill level</span>
                      </p>
                      <p>Expert</p>
                    </div>
                    <hr className='custom-hr' />

                    <div className='flex justify-between text-lg py-3'>
                      <p className=' flex items-center gap-2'>
                        <span><RiArtboardLine/></span>
                        <span>Quizzes</span>
                      </p>
                      <p>0</p>
                    </div>
                    <hr className='custom-hr' />

                    <div className='flex justify-between text-lg py-3'>
                      <p className=' flex items-center gap-2'>
                        <span><RiAwardLine/></span>
                        <span>Certifications</span>
                      </p>
                      <p>Yes</p>
                    </div>
                    <hr className='custom-hr' />

                    <div className='flex justify-between text-lg py-3'>
                      <p className=' flex items-center gap-2'>
                        <span><BsPercent/></span>
                        <span>Pass Percentage</span>
                      </p>
                      <p>80%</p>
                    </div>
                    <hr className='custom-hr' />

                    <div className='flex justify-between text-lg py-3'>
                      <p className=' flex items-center gap-2'>
                        <span><AiTwotoneCalendar/></span>
                        <span>Deadline</span>
                      </p>
                      <p>25 Dec, 2023</p>
                    </div>
                    <hr className='custom-hr' />

                    <div className='flex justify-between text-lg py-3'>
                      <p className=' flex items-center gap-2'>
                        <span><MdPersonOutline/></span>
                        <span>Instructor</span>
                      </p>
                      <p>James Carlson</p>
                    </div>
                  </div>

                  {/* price  */}
                  <div className=' text-center py-3 mt-3 text-xl btn'>
                    <p className=' select-none'>Price $49.00</p>
                  </div>
                </div>
              </div>
            </div>
            {/* detail left end  */}

            {/* detail right start */}
            <div className=" w-[50%] flex flex-col gap-5 p-5">
              <img
                src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2023/03/course-26.webp"
                className="w-full h-[270px]"
              />
              <div className="flex justify-between">
                <div className="flex gap-2 items-center">
                  <img
                    src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/11/instructor-03-02-2-100x100.webp"
                    className=" w-8 rounded-full"
                  />
                  <p className="tableTitle text-sm tracking-wide">
                    Janet Fleming
                  </p>
                </div>
                <div className="tableTitle flex items-center gap-2">
                  <RxCalendar className=" text-lg" />
                  <p className="text-sm tracking-wide">09 Feb, 2023</p>
                </div>
                <div className="tableTitle flex items-center gap-2">
                  <TiMessages className=" text-lg" />
                  <p className="text-sm tracking-wide">0 Comments</p>
                </div>
                <div className="tableTitle flex items-center gap-1">
                  <RiEyeLine className=" text-lg" />
                  <p className="text-sm tracking-wide">1 Min Read</p>
                </div>
              </div>
              <div className=" flex flex-col gap-4">
                <h1 className="text-gray-50 text-2xl font-medium">
                  Social Media Marketing MASTERY( A-Z ) Journey
                </h1>
                <p className="tableTitle text-sm tracking-wide">
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
                <div className=" bg-color shadow-lg p-5 rounded">
                  <p className=" text-gray-50 text-xl tracking-wide text-center">
                    “ Duis vel scelerisque augue, ut vehicula nisl. Curabitur et
                    mollis tortor, eget sollicitudin lectus. Praesent a ante ac
                    urna ultrices volutpat at sed ligula. Phasellus nibh dui,
                    pulvinar a nibh quis. ”
                  </p>
                </div>
                <p className="tableTitle text-sm tracking-wide">
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
