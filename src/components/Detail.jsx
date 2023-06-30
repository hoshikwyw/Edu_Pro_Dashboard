import React from "react";
import Navbar from "./Navbar";
import { StateContextCustom } from "./context/StateContext";
import { RxCalendar } from "react-icons/rx";
import { TiMessages } from "react-icons/ti";
import { RiEyeLine } from "react-icons/ri";
import { IoMdCheckboxOutline } from "react-icons/io";
import "./detail.css";

const Detail = () => {
  const { isSidebarOpen } = StateContextCustom();
  return (
    <div className="flex flex-col">
      <div>
        <Navbar />
      </div>
      <div
        className={`mt-[52px] duration-500 ${
          isSidebarOpen && " ml-[230px]"
        } max-lg:ml-0`}
      >
        <div className=" flex justify-center">
          <div className=" bgTransparent w-[95%] mt-10 rounded flex justify-between ">
            {/* detail left start */}
            <div className="border w-[45%] text-white">
              <h1>hello</h1>
            </div>
            {/* detail left end  */}

            {/* detail right start */}
            <div className=" w-[50%] flex flex-col gap-5 p-5">
              <img
                src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2023/03/course-26.webp"
                className="w-full"
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
              {/* <div className="flex flex-col gap-4">
                <h1 className="text-gray-50 text-lg font-medium">
                  Learned From Doing One Of Those Social Media
                </h1>
                <div className="tableTitle flex flex-col gap-3">
                  <p className="text-sm flex gap-2 tracking-wide">
                    <IoMdCheckboxOutline className=" text-lg" />
                    Struggling to sell one multi-million dollar home currently
                    on the market
                  </p>
                  <p className="text-sm flex gap-2 tracking-wide">
                    <IoMdCheckboxOutline className=" text-lg" />
                    The point of using Lorem Ipsum is that it has a normal
                    distribution of letters.
                  </p>
                  <p className="text-sm flex gap-2 tracking-wide">
                    <IoMdCheckboxOutline className=" text-lg" />
                    Publishing packages and web page editors now use their
                    default model text.
                  </p>
                  <p className="text-sm flex gap-2 tracking-wide">
                    <IoMdCheckboxOutline className=" text-lg" />
                    Publishing packages and web page editors now use their
                    default model text.
                  </p>
                </div>
              </div>
              <div className=" flex justify-between">
                <div className=" flex gap-2">
                  <button className="btn font-medium px-4 py-2 shadow-lg tracking-wider text-white text-xs rounded">
                    Branding
                  </button>
                </div>
              </div> */}
            </div>
            {/* detail right end */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
