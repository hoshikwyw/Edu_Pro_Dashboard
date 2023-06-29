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
      {/* <div className={`mt-[52px] duration-500 ${isSidebarOpen && " ml-[230px]" } max-lg:ml-0`}>
        <p>Detail</p>
      </div> */}
    </div>
  )
}

export default Detail
