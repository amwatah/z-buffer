import React from "react";
interface Props {
  zIndex: number;
  color: string;
  shape: "rectangle" | "cirle" | "box";
}
const ZBox = ({ zIndex, color, shape }: Props) => {
  return (
    <div
      className={` z-[${zIndex}] bg-[${color}] ${
        shape === "cirle" ? " rounded-full" : null
      } ${shape === "rectangle" ? " w-52 h-24" : null} ${
        shape === "box" ? " w-32 h-32" : null
      } `}
    >
      z = {zIndex}
    </div>
  );
};

export default ZBox;
