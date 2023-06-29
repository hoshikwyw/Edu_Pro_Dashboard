import React from 'react'
import Dashboard from './Dashboard';
import { StateContextCustom } from "../components/context/StateContext";
import Navbar from "../components/Navbar";
import Theme from "../components/Theme";
import { useSelector } from 'react-redux';

const Home = () => {
    const { isSidebarOpen } = StateContextCustom();
    const {showComponents} = useSelector(state => state.showComponentsSlice)
    console.log(showComponents);
    return (
      <>
      <Theme />
      <div className="flex flex-col">
        <div>
          <Navbar />
        </div>
  
        <div className={`mt-[52px] duration-500 ${isSidebarOpen && " ml-[230px]" } max-lg:ml-0`}>
          {/* <showComponents/> */}
          <Dashboard/>
        </div>
        
      </div>
      </>
    );
  };

export default Home