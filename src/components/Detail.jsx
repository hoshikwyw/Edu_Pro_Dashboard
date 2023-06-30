import React from 'react'
import Navbar from './Navbar'
import { StateContextCustom } from './context/StateContext';

const Detail = () => {
  const { isSidebarOpen } = StateContextCustom();
  return (
    <div className='flex flex-col'>
      <div>
        <Navbar/>
      </div>
      <div className={`mt-[52px] duration-500 ${isSidebarOpen && " ml-[230px]" } max-lg:ml-0`}>
        <div className=' flex justify-center'>
          <div className=" bgTransparent w-[95%] mt-10 rounded flex justify-between ">
            {/* detail left start */}
            <div className='border w-[45%] text-white'>
              <h1>hello</h1>
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
