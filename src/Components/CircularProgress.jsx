import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const CircularProgress = ({ value = 0 }) => {
  const max = 100;

  return (
    <div className="relative lg:w-[140px] lg:h-[140px] ">
      <CircularProgressbar
        value={value}
        maxValue={max}
        strokeWidth={10}
        styles={buildStyles({
          pathColor: "#4E56C0",
          trailColor: "#f5a6ceff",
        })}
      />

      {/*Make text center to progress bar */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center font-[Outfit]">
        <span className="lg:text-[26px] text-sm sm:text-base font-medium leading-none ">
          {value}
        </span>
        <span className="lg:text-sm text-[9px] sm:text-[10px] font-medium text-gray-600 ">
          out of {max}
        </span>
      </div>
    </div>
  );
};

export default CircularProgress;
