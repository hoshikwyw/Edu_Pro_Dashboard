import {
  addMonths,
  endOfMonth,
  format,
  isSameMonth,
  isThisMonth,
  isToday,
  lastDayOfMonth,
  parse,
  previousDay,
  setMonth,
  startOfMonth,
  startOfToday,
} from "date-fns";
import { eachDayOfInterval } from "date-fns/esm";
import React, { useEffect, useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { useDisclosure } from "@mantine/hooks";
import { Modal, Group, Button } from "@mantine/core";
import isSameDay from "date-fns/isSameDay";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { addEvent } from "../../redux/themeSlice";

import { HiBars3BottomRight } from "react-icons/hi2";
import { StateContextCustom } from "../context/StateContext";
import Navbar from "../Navbar";

const Calender = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  // console.log(windowWidth);
  const { isSidebarOpen } = StateContextCustom();
  useEffect(() => {
    const handlerResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handlerResize);
    return () => {
      window.removeEventListener("resize", handlerResize);
    };
  }, []);

  let today = startOfToday();

  let eventArray = [];
  const [todayS, settoday] = useState(today);
  let stringFormat = format(todayS, "MMM-yyyy");
  let [currentMonth, setCurrentMonth] = useState(stringFormat);
  let date = new Date();

  let firstDayCurrentMonth = parse(currentMonth, "MMM-yyyy", todayS);
  let lastDayOfCurrentMonth = endOfMonth(firstDayCurrentMonth);
  // console.log(today.getMonth() - 1);
  let days = eachDayOfInterval({
    start: firstDayCurrentMonth,
    end: endOfMonth(firstDayCurrentMonth),
  });
  // console.log(firstDayCurrentMonth);
  // console.log(stringFormat);
  const options = { weekday: "short" };

  const dayname = (day) => {
    let nameDay = day.toLocaleString("en-US", options);

    return nameDay;
  };

  let startOfPreviousMonth = startOfMonth(addMonths(todayS, -1));
  let endOfPreviousMonth = endOfMonth(addMonths(todayS, -1));

  let daysOfprev = eachDayOfInterval({
    start: startOfPreviousMonth,
    end: endOfPreviousMonth,
  });
  let startOfNextMonth = startOfMonth(addMonths(todayS, +1));
  let endOfNextMonth = endOfMonth(addMonths(todayS, +1));
  let daysOfnext = eachDayOfInterval({
    start: startOfNextMonth,
    end: endOfNextMonth,
  });
  // const dateNew = new Date(endOfPreviousMonth);
  // console.log(endOfPreviousMonth.getDate());
  // console.log(currentMonth);
  // console.log(today);
  for (let i = 0; i < firstDayCurrentMonth.getDay(); i++) {
    days.unshift(daysOfprev[endOfPreviousMonth.getDate() - 1 - i]);
  }

  const suffixDays = 42 - days.length;

  for (let i = 0; i < suffixDays; i++) {
    days.push(daysOfnext[i]);
  }

  const [opened, { open, close }] = useDisclosure(false);
  const [eventValue, setEventValue] = useState("");
  const [oneClickDate, setOneClickDate] = useState("");
  const dispatch = useDispatch();
  const events = useSelector((state) => state.themeSlice?.events);

  const [togleEvent, setTogleEvent] = useState(false);
  let filteredEventDisplay = events.filter(
    (event) =>
      event?.oneClickDate?.toLocaleString("default", { month: "long" }) ==
      todayS?.toLocaleString("default", { month: "long" })
  );

  useEffect(() => {
    setCurrentMonth(format(todayS, "MMM-yyyy"));
    days = eachDayOfInterval({
      start: firstDayCurrentMonth,
      end: lastDayOfCurrentMonth,
    });
    startOfPreviousMonth = startOfMonth(addMonths(todayS, -1));
    endOfPreviousMonth = endOfMonth(addMonths(todayS, -1));

    daysOfprev = eachDayOfInterval({
      start: startOfPreviousMonth,
      end: endOfPreviousMonth,
    });
    startOfNextMonth = startOfMonth(addMonths(todayS, +1));
    endOfNextMonth = endOfMonth(addMonths(todayS, +1));
    daysOfnext = eachDayOfInterval({
      start: startOfNextMonth,
      end: endOfNextMonth,
    });
    filteredEventDisplay = events.filter(
      (event) =>
        event?.oneClickDate?.toLocaleString("default", { month: "long" }) ==
        todayS?.toLocaleString("default", { month: "long" })
    );
  }, [todayS]);
  // console.log(filteredEventDisplay);
  // const filteredEventDisplayFun = () => {
  //   filteredEventDisplay = events?.filter((event) =>
  //     event.oneClickDate?.getMonth()
  //   );
  //   console.log(filteredEventDisplay);
  // };
  // filteredEventDisplayFun();
  let bgTexture = JSON.parse(localStorage.getItem("bgTexture"));
  return (
    <>
      <div className="flex flex-col ">
        <div>
          <Navbar />
        </div>

        <div
          className={`mt-[52px] duration-500 ${
            isSidebarOpen && " ml-[230px]"
          } max-lg:ml-0 `}>
          <div className="  flex justify-center items-center flex-col px-3 py-10 lg:p-10 md:p-10  ">
            <div className="w-full flex justify-between ">
              <div className="w-full flex  justify-between items-center mb-5">
                <div className="">
                  <div
                    onClick={() => settoday(today)}
                    className={`${
                      bgTexture?.white
                        ? "bg-[#CEC0BA] text-white"
                        : " bg-white text-black"
                    } max-[530px]:w-[90px] max-[530px]:text-[15px] max-[340px]:text-[13px]  cursor-pointer hover:bg-slate-400 rounded text-center px-3 py-2 max-[340px]:w-[60px]`}>
                    Today
                  </div>
                </div>
                {/* 779FCC */}
                {/* max-400px:hidden < > and month 2023 start */}
                <div className=" max-[400px]:hidden justify-center flex items-center flex-col">
                  <p
                    className={`${
                      bgTexture?.white ? "text-[#A4795A]" : " text-white"
                    } title text-2xl max-[530px]:text-[20px] `}>
                    {todayS?.toLocaleString("default", { month: "long" })}
                    <span> {todayS?.getFullYear()}</span>
                  </p>
                  <div className=" flex gap-3 mt-2 items-center">
                    <button
                      onClick={() => {
                        settoday(addMonths(todayS, -1));

                        firstDayCurrentMonth = parse(
                          currentMonth,
                          "MMM-yyyy",
                          todayS
                        );
                        lastDayOfCurrentMonth =
                          endOfMonth(firstDayCurrentMonth);
                      }}
                      className=" px-3 py-1 max-[530px]:px-1 max-[340px]:px-0 max-[530px]:text-[15px]
            bg-white rounded hover:bg-slate-400">
                      <MdKeyboardArrowLeft className=" text-2xl" />
                    </button>
                    <button
                      onClick={() => {
                        settoday(addMonths(todayS, +1));

                        firstDayCurrentMonth = parse(
                          currentMonth,
                          "MMM-yyyy",
                          todayS
                        );
                        lastDayOfCurrentMonth =
                          endOfMonth(firstDayCurrentMonth);
                      }}
                      className=" px-3 py-1 max-[530px]:px-1 max-[340px]:px-0 max-[530px]:text-[15px]
            bg-white rounded hover:bg-slate-400">
                      <MdKeyboardArrowRight className=" text-2xl" />
                    </button>
                  </div>
                </div>
                {/* max-400px:hidden < > and month 2023 end*/}
                <div>
                  <button
                    onClick={() => setTogleEvent(!togleEvent)}
                    className={`${
                      bgTexture?.white ? "bg-[#CEC0BA] text-white" : ""
                    } px-3 py-2 max-[530px]:px-2 max-[530px]:text-[15px] max-[340px]:text-[13px]
            bg-white shadow-sm rounded hover:bg-slate-400 `}>
                    Event List
                  </button>
                  {/* <button
                  className=" px-3 py-1 
            bg-white shadow-sm">
                  week
                </button>
                <button
                  className=" px-3 py-1 
            bg-white shadow-sm ">
                  day
                </button> */}
                </div>
              </div>
            </div>

            {/* laptop view hidden < > and month 2023 start*/}
            <div className=" hidden max-[400px]:flex max-[400px]:gap-8 mb-5 ">
              <button
                onClick={() => {
                  settoday(addMonths(todayS, -1));

                  firstDayCurrentMonth = parse(
                    currentMonth,
                    "MMM-yyyy",
                    todayS
                  );
                  lastDayOfCurrentMonth = endOfMonth(firstDayCurrentMonth);
                }}
                className={`${
                  bgTexture?.white ? "bg-[#779FCC] " : " bg-white "
                } px-3 py-1 max-[530px]:px-1 max-[340px]:px-0 max-[530px]:text-[15px]
             rounded hover:bg-slate-400`}>
                <MdKeyboardArrowLeft
                  className={`${
                    bgTexture?.white ? "text-[#779FCC] " : " "
                  }  text-2xl`}
                />
              </button>
              <p className="title text-2xl max-[325px]:text-[18px]">
                {todayS?.toLocaleString("default", { month: "long" })}
                <span
                  className={`${
                    bgTexture?.white ? "bg-[#CEC0BA] text-black" : "text-white"
                  } `}>
                  {" "}
                  {todayS?.getFullYear()}
                </span>
              </p>
              <button
                onClick={() => {
                  settoday(addMonths(todayS, +1));

                  firstDayCurrentMonth = parse(
                    currentMonth,
                    "MMM-yyyy",
                    todayS
                  );
                  lastDayOfCurrentMonth = endOfMonth(firstDayCurrentMonth);
                }}
                className=" px-3 py-1 max-[530px]:px-1 max-[340px]:px-0 max-[530px]:text-[15px]
            bg-white rounded hover:bg-slate-400">
                <MdKeyboardArrowRight className=" text-2xl" />
              </button>
            </div>
            {/* laptop view hidden < > and month 2023 end*/}

            <div
              className={` w-full
              flex
              justify-between
              flex-wrap
              gap-4`}>
              {/* calendar body */}
              <div
                className={`${
                  togleEvent == true
                    ? "w-full  md:w-full  lg:w-[70%]"
                    : "w-full"
                } ${bgTexture?.white && "shadow-lg bg-[#FFEEE6]"} `}>
                <div className=" grid grid-cols-7 bgTransparent ">
                  <div className=" w-full py-3 px-2 borderTransparent title  max-[500px]:text-[15px]">
                    {windowWidth <= 430 ? (
                      <p className=" text-center font-bold">S</p>
                    ) : (
                      <p>SUN</p>
                    )}
                  </div>
                  <div className="w-full py-3 px-2 borderTransparent title  max-[500px]:text-[15px]">
                    {windowWidth <= 430 ? (
                      <p className=" text-center font-bold">M</p>
                    ) : (
                      <p>MON</p>
                    )}
                  </div>
                  <div className="w-full py-3 px-2 borderTransparent title max-[500px]:text-[15px]">
                    {windowWidth <= 430 ? (
                      <p className=" text-center font-bold">T</p>
                    ) : (
                      <p>TUE</p>
                    )}
                  </div>
                  <div className="w-full py-3 px-2 borderTransparent title max-[500px]:text-[15px]">
                    {windowWidth <= 430 ? (
                      <p className=" text-center font-bold">W</p>
                    ) : (
                      <p>WED</p>
                    )}
                  </div>
                  <div className="w-full py-3 px-2 borderTransparent title max-[500px]:text-[15px]">
                    {windowWidth <= 430 ? (
                      <p className=" text-center font-bold">T</p>
                    ) : (
                      <p>THU</p>
                    )}
                  </div>
                  <div className="w-full py-3 px-2 borderTransparent title max-[500px]:text-[15px]">
                    {windowWidth <= 430 ? (
                      <p className=" text-center font-bold">F</p>
                    ) : (
                      <p>FRI</p>
                    )}
                  </div>
                  <div className="w-full py-3 px-2 borderTransparent title max-[500px]:text-[15px]">
                    {windowWidth <= 430 ? (
                      <p className=" text-center font-bold">S</p>
                    ) : (
                      <p>SAT</p>
                    )}
                  </div>
                </div>
                <div className=" w-full">
                  <div className=" grid grid-cols-7 overflow-hidden">
                    {days.map((day, index) => (
                      <div
                        onClick={() => {
                          open();
                          setOneClickDate(day);
                        }}
                        key={index}
                        className={`lg:p-6 md:p-6 p-2 h-[150px] max-lg:h-[130px] max-md:h-[100px] max-[500px]:h-[80px]
                      flex flex-col ${
                        bgTexture?.white ? "bgTransparent2" : "bgTransparent"
                      } bgHover borderTransparent hover:bg-slate-200 hover:bg-transparent  overflow-hidden cursor-pointer`}>
                        <div
                          className={`w-[35px] h-[35px] max-sm:w-[30px] max-sm:h-[30px] max-[430px]:w-[22px] max-[430px]:h-[22px] max-[330px]:w-[18px] max-[330px]:h-[18px] max-[430px]:text-[12px] flex items-center justify-center lg:ms-auto md:ms-auto 
                           ${
                             isToday(day) ? "bg-orange-400 text-black " : ""
                           }  rounded-[50%] ${
                            isSameMonth(day, todayS) && !isToday(day)
                              ? "lg:bg-slate-200 md:bg-slate-200  "
                              : "title"
                          } ${
                            isSameMonth(day, todayS) &&
                            !isToday(day) &&
                            bgTexture?.white
                              ? "lg:bg-[#FFEEE6] md:bg-[#FFEEE6]  childHover"
                              : "title"
                          } `}>
                          <div>
                            <time
                              dateTime={format(day, "yyyy-MM-dd")}
                              className={` ${
                                isSameMonth(day, todayS)
                                  ? "text-white"
                                  : "text-black"
                              } lg:text-black md:text-black`}>
                              {format(day, "d")}
                            </time>
                          </div>
                        </div>
                        {events.map((event, index) => (
                          <div
                            key={index}
                            className={`w-full  ${
                              isSameDay(day, event?.oneClickDate)
                                ? "block"
                                : "hidden"
                            } title text-white ${
                              index % 3 == 1
                                ? " bg-pink-300 text-black"
                                : "bg-teal-500"
                            } ${index % 5 == 2 && "bg-rose-400"}
                          ${index % 4 == 2 && "bg-violet-400"}
                          ${index % 2 == 0 && "bg-blue-400"}
                          ${index % 7 == 1 && " bg-fuchsia-800"}
                          rounded mt-2 lg:px-2 md:px-2 `}>
                            {event?.eventValue}
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* event list container */}
              <div
                className={` ${
                  togleEvent == true ? "flex w-full  lg:w-[28%]" : "hidden "
                }  ${
                  bgTexture?.white ? "bg-[#FFEEE6] text-black shadow-xl" : ""
                } p-3  flex-col gap-y-5 `}>
                <div className=" w-full flex items-center ">
                  <div
                    onClick={() => setTogleEvent(false)}
                    className=" w-[40%] flex items-center">
                    <HiBars3BottomRight className=" title" />
                  </div>
                  <div
                    className={`${
                      bgTexture?.white ? "text-[#A4795A]" : "text-white"
                    } w-[60%] title flex items-center gap-3`}>
                    <div
                      className={` ${
                        bgTexture?.white ? "text-[#A4795A]" : "text-white"
                      }`}>
                      {todayS?.toLocaleString("default", { month: "long" })}
                    </div>
                    {todayS?.getFullYear()}
                  </div>
                </div>
                <ul className=" w-full ">
                  {filteredEventDisplay.map((event, index) => (
                    <li
                      key={index}
                      className={`w-full liCalendar flex gap-5 mb-3 hover:text-orange-400 title`}>
                      <div className="border-e-2 w-[10%] pe-3">
                        <p
                          className={`${
                            bgTexture?.white
                              ? "text-[#A4795A] childCalendar "
                              : " text-white"
                          }`}>
                          {event?.oneClickDate?.getDate()}
                        </p>
                        <small
                          className={`${
                            bgTexture?.white
                              ? "text-[#A4795A] childCalendar"
                              : " text-white"
                          }`}>
                          {dayname(event?.oneClickDate)}
                        </small>
                      </div>
                      <div
                        className={`${
                          bgTexture?.white
                            ? "text-[#A4795A] childCalendar"
                            : " text-white"
                        }`}>
                        {event?.eventValue}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <Modal opened={opened} onClose={close} withCloseButton={false}>
            <button onClick={() => close()}>
              <AiOutlineClose className=" text-orange-600" />
            </button>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (eventValue.length) {
                  dispatch(addEvent({ oneClickDate, eventValue }));
                  setEventValue("");
                }
                // console.log(eventValue.length);
                close();

                // eventArray.push(eventList);
              }}
              className="  flex flex-col justify-center items-center gap-5">
              <div className=" w-full ">
                <div className=" flex justify-center gap-3 flex-col items-center">
                  <label htmlFor="eventInput" className=" text-teal-600">
                    Type to create your event
                  </label>
                  <input
                    id="eventInput"
                    value={eventValue}
                    onChange={(e) => {
                      setEventValue(e.target.value);
                    }}
                    type="text"
                    className="w-full  outline-none  py-2 border-orange-300 border-2 rounded px-5"
                    placeholder="Event"
                  />
                </div>
              </div>
              <button
                onClick={() => close()}
                className="mx-auto px-4 py-2 bg-teal-400 rounded hover:bg-slate-400 hover:text-white">
                Note it
              </button>
            </form>
          </Modal>
        </div>
      </div>
    </>
  );
};

export default Calender;
