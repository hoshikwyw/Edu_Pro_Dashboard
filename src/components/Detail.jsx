import React from 'react'
import Navbar from './Navbar'
import { StateContextCustom } from './context/StateContext';
import {BsFillPlayCircleFill, BsPeople, BsBarChart, BsPercent, BsCalendarEvent} from "react-icons/bs"
import {HiOutlineClock} from "react-icons/hi"
import {RiDraftLine, RiArtboardLine, RiAwardLine} from "react-icons/ri"
import {AiTwotoneCalendar} from "react-icons/ai"
import {MdPersonOutline} from "react-icons/md"
import './Theme.css'
import "../pages/Register.css"

const Detail = () => {
  const { isSidebarOpen } = StateContextCustom();
  return (
    <div className='flex flex-col'>
      <div>
        <Navbar/>
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
            <div className=' border w-[50%] text-white'>
              <h1>hello</h1>
            </div>
            {/* detail right end */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Detail
