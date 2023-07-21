import React, { useEffect, useState } from "react";
import Path from "./route/Path";
import "./App.css";
import backgroundImage2 from "../src/assets/bg-img/2.png";
// import Sidebar from "./components/Sidebar";
// import Navbar from "./components/Navbar";
import { useSelector } from "react-redux";
// import Calender from "./components/Calender/calender.jsx";

const App = () => {
  const bgTexture1 = useSelector((state) => state.themeSlice.bgTexture);

  let bgTexture = JSON.parse(localStorage.getItem("bgTexture"));
  // console.log(bgTexture?.length > 0 && bgTexture?.length > 25);
  // console.log(bgTexture1?.length < 25);
  // console.log(bgTexture1.name);
  // console.log(bgTexture);
  return (
    <>
      {bgTexture?.length < 25 ? (
        <div
          className=" min-h-screen"
          style={{
            backgroundImage: bgTexture1
              ? `url(${bgTexture1})`
              : bgTexture?.length > 0 && bgTexture?.length < 25
              ? `url(${bgTexture})`
              : `url(${backgroundImage2})`,
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            transition: bgTexture ? "background-image 0.5s ease-in-out" : "",
          }}>
          <Path />
        </div>
      ) : (
        <div
          className=" min-h-screen"
          style={{
            backgroundImage: bgTexture
              ? `${bgTexture?.name}`
              : `url(${backgroundImage2})`,
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            transition: bgTexture?.name ? "background-image 0.5s ease-in-out" : "",
          }}>
          <Path />
        </div>
      )}
    </>
  );
};

export default App;
