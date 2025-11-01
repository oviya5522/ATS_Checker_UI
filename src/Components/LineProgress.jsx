import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";

const LineProgress = ({ label, value, color }) => {
  return (
    <div className="flex flex-col space-y-2 lg:space-y-3">
      {/* label and percentage %  */}
      <div className="flex justify-between lg:space-x-5 space-x-4">
        <p className="text-[13px] font-medium text-start lg:text-base">
          {label}
        </p>
        <p className="text-[13px] font-medium">{value}%</p>
      </div>

      {/* Progress Bar */}
      <ProgressBar
        completed={value}
        label={false}
        height="10px"
        bgColor={color}      
        baseBgColor="#ccc8c8ff"  
        isLabelVisible={false}
        className="sm:w-[170px] lg:w-[200px]"
      />
    </div>
  );
};

export default LineProgress;
