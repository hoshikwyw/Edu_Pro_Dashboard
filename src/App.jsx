import React, { useEffect, useState } from "react";
import Path from "./route/Path";
import "./App.css";
import backgroundImage2 from "../src/assets/bg-img/2.png";

import { useSelector } from "react-redux";

const App = () => {
  const bgTexture = useSelector((state) => state.themeSlice.bgTexture);

  const [bg, setBg] = useState(
    JSON.parse(localStorage.getItem("bgTexture")) || bgTexture
  );

  useEffect(() => {
    setBg(JSON.parse(localStorage.getItem("bgTexture")) || bgTexture);
  }, [bgTexture]);

  return (
    <>
      {bg?.name.length < 25 ? (
        <div
          className=" min-h-screen"
          style={{
            backgroundImage: `url(${bg.name})`,
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            transition: bg ? "background-image 0.5s ease-in-out" : "",
          }}>
          <Path />
        </div>
      ) : (
        <div
          className=" min-h-screen"
          style={{
            backgroundImage: `${bg?.name}`,
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            transition: bg?.name ? "background-image 0.5s ease-in-out" : "",
          }}>
          <Path />
        </div>
      )}
    </>
  );
};

export default App;

//.............. Old code.............
// const App = () => {
//   const bgTexture = useSelector((state) => state.themeSlice.bgTexture);
//
//   // let bgTexture = localStorage.getItem("bgTexture") && JSON.parse(localStorage.getItem("bgTexture"));

//   // try {
//   //   bgTexture =
//   //     localStorage.getItem("bgTexture") &&
//   //     JSON.parse(localStorage.getItem("bgTexture"));
//   // } catch (error) {
//   //   console.error("Error parsing bgTexture:", error);
//   // }

//   // console.log(bgTexture?.length > 0 && bgTexture?.length > 25);
//   // console.log(bgTexture1?.length < 25);
//   // console.log(bgTexture1.name);
//   // console.log(bgTexture);
//   return (
//     <>
//       {bg?.name.length < 25 ? (
//         <div
//           className=" min-h-screen"
//           style={{
//             backgroundImage:
//             // bg.name
//             // ? `url(${bg.name})`
//             // : bg?.name.length > 0 && bg?.length < 25
//             // ? `url(${bg.name})`
//             // : `(linear-gradient(45deg, #1f1f1e, #1f1f1e)`,
//             backgroundSize: "100% 100%",
//             backgroundRepeat: "no-repeat",
//             backgroundPosition: "center",
//             transition: bg ? "background-image 0.5s ease-in-out" : "",
//           }}>
//           <Path />
//         </div>
//       ) : (
//         <div
//           className=" min-h-screen"
//           style={
//             // bg
//             //   ? `${bg?.name}`
//             //   : `linear-gradient(45deg, #1f1f1e, #1f1f1e)`,
//             backgroundSize: "100% 100%",
//             backgroundRepeat: "no-repeat",
//             backgroundPosition: "center",
//             transition: bg?.name ? "background-image 0.5s ease-in-out" : "",
//           }}>
//           <Path />
//         </div>
//       )}
//     </>
//   );
// };
