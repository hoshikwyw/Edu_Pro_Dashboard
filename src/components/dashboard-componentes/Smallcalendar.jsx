import React, { useEffect, useRef, useState } from "react";
import { Group } from "@mantine/core";
import { Calendar } from "@mantine/dates";
import { BiSearchAlt } from "react-icons/bi";
import { IoLocationSharp } from "react-icons/io5";
import { CiTempHigh } from "react-icons/ci";
import { MdClose } from "react-icons/md";
import moment from "moment-timezone";
import "./feedback.css";
const Api_key = "626a6abe348b9d2c19cf6f3f8d15fd79";

const Smallcalendar = () => {
  const inputRef = useRef(null);
  const [apiData, setApiData] = useState(null);
  // console.log(apiData);
  const [showWeather, setShowWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [currentDateTime, setCurrentDateTime] = useState("");

  const WeatherTypes = [
    {
      type: "Clear",
      img: "https://cdn-icons-png.flaticon.com/512/6974/6974833.png",
    },
    {
      type: "Rain",
      img: "https://cdn-icons-png.flaticon.com/512/3351/3351979.png",
    },
    {
      type: "Snow",
      img: "https://cdn-icons-png.flaticon.com/512/642/642102.png",
    },
    {
      type: "Clouds",
      img: "https://cdn-icons-png.flaticon.com/512/414/414825.png",
    },
    {
      type: "Haze",
      img: "https://cdn-icons-png.flaticon.com/512/1197/1197102.png",
    },
    {
      type: "Smoke",
      img: "https://cdn-icons-png.flaticon.com/512/4380/4380458.png",
    },
    {
      type: "Mist",
      img: "https://cdn-icons-png.flaticon.com/512/4005/4005901.png",
    },
    {
      type: "Drizzle",
      img: "https://cdn-icons-png.flaticon.com/512/3076/3076129.png",
    },
  ];

  const fetchWeather = async (location) => {
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${Api_key}`;
    // console.log(URL);
    setLoading(true);

    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        // setApiData(null);
        setShowWeather(
          WeatherTypes.filter(
            (weather) => weather.type === data.weather[0].main
          )
        );
        setApiData(data);
        const timeZone = moment.tz.guess();
        const currentDateTime = moment()
          .tz(timeZone)
          .format("DD-MM-YYYY , HH:mm:ss");
        setCurrentDateTime(currentDateTime);
        // console.log(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchWeather("yangon");
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const location = inputRef.current.value || "yangon";
    fetchWeather(location);
    updateCurrentDateTime(location);
  };

  const handleInputChange = () => {
    const location = inputRef.current.value || "yangon";
    fetchWeather(location);
    updateCurrentDateTime(location);
  };

  const handleClearInput = () => {
    inputRef.current.value = "";
    handleInputChange();
    updateCurrentDateTime("yangon");
  };

  const updateCurrentDateTime = (location) => {
    const timeZone = moment.tz.guess();
    const currentDateTime = moment()
      .tz(timeZone)
      .format("DD-MM-YYYY , HH:mm:ss");
    setCurrentDateTime(currentDateTime);
  };

  return (
    <div className="">
      <div className=" flex flex-col justify-center items-center md:items-start lg:items-start gap-5 md:flex-row lg:flex-row md:gap-[5%] lg:gap-[5%] w-[95%] mx-auto">
        {/* calendar  */}
        <div className="">
          <Group className=" custom-calendar">
            <Calendar
              color="blue"
              className=" bgTransparent rounded shadow-md px-3 py-2 size"
            />
          </Group>
        </div>
        {/* right side weather  */}

        <div className=" card-size md:w-[50%] lg:w-[50%] flex flex-col justify-center items-center cursor-pointer">
          <div className=" w-full bgTransparent rounded shadow-md pt-3 ">
            <div className=" flex items-center justify-center mt-3">
              <form
                onSubmit={handleSubmit}
                className=" flex items-center bg-[#2e2e2e31] rounded px-3 py-1">
                <input
                  type="text"
                  ref={inputRef}
                  onChange={handleInputChange}
                  placeholder=" Enter Your Location"
                  className=" text-sm px-3 py-1 rounded bg-transparent uppercase outline-none flex-1 text-[#ffffffd0]"
                />
                <button onClick={fetchWeather}>
                  <BiSearchAlt className=" text-lg text-[#ffffffe0]" />
                </button>
                <button onClick={handleClearInput}>
                  <MdClose className=" text-lg text-[#252424e0] bg-slate-300 ms-2 rounded " />
                </button>
              </form>
            </div>
            <div>
              {loading ? (
                <div className=" flex flex-col gap-3 items-center justify-center text-xl font-semibold text-[#ffffffef] tracking-wider mt-16">
                  <p>loading ...</p>
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/1477/1477009.png"
                    alt="..."
                    className="w-14 mx-auto mb-8 animate-spin h-full mt-16"
                  />
                </div>
              ) : (
                apiData && (
                  // Show weather data
                  <div className="flex rounded mt-5 pb-10 flex-col gap-3 items-center justify-center w-[80%] mx-auto">
                    <p className="text-xl font-bold mt-8 text-[#ffffffee] tracking-wider flex items-center gap-3">
                      {apiData?.name + " , " + apiData?.sys?.country}{" "}
                      <IoLocationSharp />
                    </p>
                    {currentDateTime && (
                      <p className="text-sm text-[#ffffffc0] tracking-wider">
                        {currentDateTime}
                      </p>
                    )}
                    <img src={showWeather[0]?.img} alt="" className=" w-40" />

                    <h2 className="text-lg text-[#ffffffef] tracking-wider">
                      {showWeather[0]?.type}
                    </h2>
                    <div className="flex items-center gap-1">
                      <p>
                        <CiTempHigh className="text-2xl text-[#ffffffde]" />
                      </p>
                      <h2 className="text-xl text-[#ffffffe3] font-semibold tracking-widest">
                        {apiData.main.temp}&#176;C
                      </h2>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Smallcalendar;
