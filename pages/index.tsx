import { Slider } from "@mantine/core";
import React, { useState } from "react";
import ZBox from "../components/ZBox";
import ZBufferBox from "../components/ZBufferBox";

const Home = () => {
  const [hugeRectange, setHugeRectange] = useState<number>(0);
  const [rectagle, setRectangle] = useState<number>(0);
  const [circle, setCircle] = useState<number>(0);
  const [verticalRectangle, setVerticalRectangle] = useState<number>(0);
  return (
    <div className=" relative w-screen h-screen flex flex-col items-center">
      <p className=" text-sm ">Z-BUFFER IMPLEMENTATION -GROUP 4</p>
      <div
        className={`fixed top-[10%] box h-[50vh] w-[65vw] bg-green-500 `}
        style={{ zIndex: hugeRectange }}
      >
        z1={hugeRectange}
      </div>
      <div
        className=" fixed top-[20%] box h-[25vh] w-[80vw] bg-red-500 "
        style={{ zIndex: rectagle }}
      >
        z2={rectagle}
      </div>
      <div
        className=" fixed top-[50%] box h-[30vh] w-[30vh] bg-blue-500 rounded-[100%]  "
        style={{ zIndex: circle }}
      >
        <p className=" absolute  text-sm top-[40%] ml-0"> z3={circle}</p>
      </div>
      <div
        className=" fixed top-[5%] box h-[70vh] w-[15vw] bg-yellow-500 "
        style={{ zIndex: verticalRectangle }}
      >
        z4={verticalRectangle}
      </div>
      <section className=" fixed bottom-0 flex gap-2 p-2 ">
        <div className="input">
          <span className=" flex justify-center text-lg font-bold">z1</span>
          <input
            type="range"
            min={0}
            max={100}
            value={hugeRectange}
            onChange={(e) => setHugeRectange(parseInt(e.target.value))}
          />
        </div>
        <div className="input">
          <span className=" flex justify-center text-lg font-bold">z2</span>
          <input
            type="range"
            min={0}
            max={100}
            value={rectagle}
            onChange={(e) => setRectangle(parseInt(e.target.value))}
          />
        </div>
        <div className="input">
          <span className=" flex justify-center text-lg font-bold">z3</span>
          <input
            type="range"
            min={0}
            max={100}
            value={circle}
            onChange={(e) => setCircle(parseInt(e.target.value))}
          />
        </div>
        <div className="input">
          <span className=" flex justify-center text-lg font-bold">z4</span>
          <input
            type="range"
            min={0}
            max={100}
            value={verticalRectangle}
            onChange={(e) => setVerticalRectangle(parseInt(e.target.value))}
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
