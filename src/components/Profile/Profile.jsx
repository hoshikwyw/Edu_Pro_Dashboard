import React from "react";
import ProfileLeft from "./ProfileLeft";
import ProfileRight from "./ProfileRight";
import Navbar from "../Navbar";
import { StateContextCustom } from "../context/StateContext";

const Profile = () => {
  const { isSidebarOpen } = StateContextCustom();

  return (
    <>
    <div className="flex flex-col">
        <div>
          <Navbar />
        </div>
  
        <div className={`mt-[52px] duration-500 ${isSidebarOpen && " ml-[230px]" } max-lg:ml-0`}>
          <div className="lg:h-auto md:h-auto h-auto w-full flex justify-center">
              <div className="   w-[98.5%] mt-2 mb-1  flex flex-wrap justify-center">
                {/* left */}
                <div className="w-[90%] lg:w-[35%] md:w-[80%] lg:h-screen h-[700px]  flex justify-center ">
                  <ProfileLeft />
                </div>
                {/* right */}
                <div className="w-full lg:w-[65%] md:w-full pt-[14px] ">
                  <ProfileRight />
                </div>
              </div>
          </div>
        </div>
        
      </div>
    
    </>
  );
};

export default Profile;
