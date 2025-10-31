import React from "react";
import progress from "../assets/progress.svg";
import card1 from "../assets/keyword.svg";
import card1_bar from "../assets/keyword_bar.svg";
import card2 from "../assets/content.svg";
import card2_bar from "../assets/content_bar.svg";
import card3 from "../assets/format.svg";
import card3_bar from "../assets/format_bar.svg";
import card4 from "../assets/section.svg";
import card4_bar from "../assets/section_bar.svg";
import card2_last from "../assets/card2_last.svg";
import danger from "../assets/danger.svg";
import danger_last from "../assets/danger_last.svg";
import { GoArrowDown } from "react-icons/go";
import { PiDownloadBold } from "react-icons/pi";
const ScoreDashboard = () => {
  return (
    <div className="mt-9 mx-1.5 md:m-10  lg:mx-18 lg:mt-20">
      <div>
        {/* headlines */}
        <div className="flex flex-col justify-center items-center space-y-1 sm:space-y-2 lg:space-y-2.5">
          <p className="bg-[#4E56C0] text-sm text-white p-2.5  font-[Outfit] border rounded-lg">
            {" "}
            Analysis Complete
          </p>
          <h1 className="font-[Outfit] font-medium lg:text-[40px] sm:text-2xl text-center text-xl">
            ATS Score Dashboard
          </h1>
          <p className=" text-[#777777] font-[Outfit]">
            Results for : (Resume Name.extension)
          </p>
        </div>
        {/* progress bar */}
        <div className=" px-2.5 pt-3 lg:pt-8 sm:px-5 lg:px-16 font-[Outfit]">
          <div className="w-full  space-y-2.5">
            <div className="bg-[#f3f3f5] rounded-lg border  border-[#4E56C0] px-2 py-5 lg:py-8 w-full lg:px-6 shadow-[0_0_10px_rgba(0,0,0,0.4)]">
              <div className="p-2 sm:p-3 lg:p-3 flex justify-between ">
                <div className="flex flex-col justify-start items-start space-y-2 ">
                  <h1 className="font-[Outfit] font-medium lg:text-[34px] sm:text-2xl text-sm">
                    Overall ATS Score
                  </h1>
                  <p className="text-[14px] sm:text-sm lg:text-base w-[150px] sm:w-full">
                    Your resume has a good ATS compatibility score
                  </p>
                  <button className="bg-[#4E56C0] text-[9px] sm:text-[11px] text-white p-1.5 sm:p-2  font-[Outfit] border rounded-lg">
                    Score:Good
                  </button>
                </div>
                <div className="text-end">
                  <img
                    src={progress}
                    alt="progress"
                    className="w-[85px] h-[85px] sm:w-[100px] sm:h-[100px] lg:w-[120px] lg:h-[120px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 4 div's */}
        <div className="px-2.5 pt-8 lg:pt-10 sm:pt-8 sm:px-5 lg:px-17 font-[Outfit]">
          <div className="flex flex-col gap-y-4 sm:grid sm:grid-cols-2 sm:gap-4 sm:space-y-0 lg:gap-y-10 sm:gap-y-11 lg:gap-x-20 sm:gap-x-15 lg:space-x-3">
            <div className="flex justify-center items-center text-center rounded-lg shadow-[0_0_10px_rgba(0,0,0,0.4)] p-4 space-x-5 lg:space-x-3 lg:p-6 sm:p-5">
              <img
                src={card1}
                alt="Card1"
                className="w-10 h-10 lg:w-[45px] lg:h-[45px] items-center "
              />
              <div className="flex flex-col space-y-2 lg:space-y-3">
                <div className="flex justify-between ">
                  <p className="text-[13px] font-medium text-start lg:text-base">Keyword Match</p>
                  <p className="text-[13px] font-medium ">83%</p>
                </div>
                <img
                  src={card1_bar}
                  alt="Progress-Bar1"
                  className="sm:w-[170px] lg:w-[200px]"
                />
              </div>
            </div>
            <div className="flex justify-center items-center text-center rounded-lg shadow-[0_0_10px_rgba(0,0,0,0.4)] p-4 space-x-5 lg:p-6 sm:p-5 lg:space-x-3">
              <img
                src={card2}
                alt="Card2"
                className="w-10 h-10 lg:w-[45px] lg:h-[45px] items-center "
              />
              <div className="flex flex-col space-y-2 lg:space-y-3">
                <div className="flex justify-between ">
                  <p className="text-[13px] font-medium  text-start lg:text-base">Content Quality</p>
                  <p className="text-[13px] font-medium ">98%</p>
                </div>
                <img
                  src={card2_bar}
                  alt="Progress-Bar1"
                  className="sm:w-[170px] lg:w-[200px]"
                />
              </div>
            </div>
            <div className="flex justify-center items-center text-center rounded-lg shadow-[0_0_10px_rgba(0,0,0,0.4)] p-4 space-x-5 lg:p-6 sm:p-5 lg:space-x-3">
              <img
                src={card3}
                alt="Card3"
                className="w-10 h-10 lg:w-[45px] lg:h-[45px] items-center "
              />
              <div className="flex flex-col space-y-2 lg:space-y-3 ">
                <div className="flex justify-between lg:space-x-4">
                  <p className="text-[13px] font-medium  text-start lg:text-base ">
                    Format Compatibility
                  </p>
                  <p className="text-[13px] font-medium ">88%</p>
                </div>
                <img
                  src={card3_bar}
                  alt="Progress-Bar1"
                  className="sm:w-[170px] lg:w-[200px]"
                />
              </div>
            </div>
            <div className="flex justify-center items-center text-center  rounded-lg shadow-[0_0_10px_rgba(0,0,0,0.4)] p-4 space-x-5 lg:p-6 sm:p-5 lg:space-x-3">
              <img
                src={card4}
                alt="Card4"
                className="w-10 h-10 lg:w-[45px] lg:h-[45px] items-center "
              />
              <div className="flex flex-col space-y-2 lg:space-y-3 ">
                <div className="flex justify-between lg:space-x-5">
                  <p className="text-[13px] font-medium  text-start lg:text-base">
                    Section Optimization
                  </p>
                  <p className="text-[13px] font-medium ">99%</p>
                </div>
                <img
                  src={card4_bar}
                  alt="Progress-Bar1"
                  className="sm:w-[170px] lg:w-[200px]"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Last 2 div */}
        <div className="flex flex-col pt-8 lg:pt-10 font-[Outfit] space-y-5 px-2.5 sm:px-5 lg:px-16 sm:grid sm:grid-cols-2 sm:gap-5 sm:space-y-0 lg:gap-x-20 sm:gap-x-14">
          <div className="flex flex-col border border-blue-300 rounded-lg shadow-[0_0_10px_rgba(0,0,0,0.4)] p-5   ">
            <div className="flex space-x-4  items-center">
              <img src={card2} alt="Card2" className="w-[45px] h-[45px]" />
              <p className="text-lg font-medium text-center lg:text-[24px]">Strengths</p>
            </div>
            <div className="pt-3">
              <p className="text-[13px] flex text-start items-center lg:text-sm">
                <span className="w-[30px] h-[30px] ">
                  <img src={card2_last} alt="Card2" />
                </span>
                Quantifiable achievements included
              </p>
              <p className="text-[13px] flex text-start items-center lg:text-sm">
                <span className="w-[30px] h-[30px] ">
                  <img src={card2_last} alt="Card2" />
                </span>
                Proper section formatting
              </p>
              <p className="text-[13px] flex text-start items-center lg:text-sm">
                <span className="w-[30px] h-[30px] ">
                  <img src={card2_last} alt="Card2" />
                </span>
                No spelling or grammar errors detected
              </p>
            </div>
          </div>
          <div className="flex flex-col border border-blue-300 rounded-lg shadow-[0_0_10px_rgba(0,0,0,0.4)] p-5   ">
            <div className="flex space-x-4  items-center">
              <img src={danger} alt="Card2" className="w-[45px] h-[45px]" />
              <p className="text-lg font-medium text-center lg:text-[24px]">
                Areas to Improve
              </p>
            </div>
            <div className="pt-5 space-y-2.5">
              <p className="text-[13px] flex text-start items-center lg:text-sm">
                <span className="w-[30px] h-[30px] ">
                  <img src={danger_last} alt="Card2" />
                </span>
                Missing important keywords for your industry
              </p>
              <p className="text-[13px] flex text-start items-center lg:text-sm">
                <span className="w-[30px] h-[30px] ">
                  <img src={danger_last} alt="Card2" />
                </span>
                Summary section could be more impactful
              </p>
              <p className="text-[13px] flex text-start items-center lg:text-sm">
                <span className="w-[30px] h-[30px] ">
                  <img src={danger_last} alt="Card2" />
                </span>
                Some bullet points lack metrics
              </p>
            </div>
          </div>
        </div>
        {/* Last 2 buttons */}
        <div className="flex flex-col justify-center items-center pt-5 lg:pt-9 sm:pt-7 space-y-4 font-[Outfit] sm:flex-row sm:space-y-0 sm:space-x-5 lg:space-x-6">
          <label
            htmlFor="file-upload"
            className="relative cursor-pointer rounded-md bg-[#4E56C0] font-semibold text-white p-3 "
          >
            <p className="flex gap-1.5 text-sm sm:text-base">
              View Recommendations
              <span className="pt-0.5">
                <GoArrowDown />
              </span>
            </p>
            <input
              id="file-upload"
              type="file"
              name="file-upload"
              className="sr-only"
            />
          </label>
          <label
            htmlFor="file-upload"
            className="relative cursor-pointer border border-[#4E56C0] rounded-md bg-white font-semibold text-[#4E56C0] p-3 font-[Outfit]"
          >
            <p className="flex gap-1.5  text-sm sm:text-base">
              <span className="pt-0.5">
                <PiDownloadBold />
              </span>
              Download Reports
            </p>
            <input
              id="file-upload"
              type="file"
              name="file-upload"
              className="sr-only"
            />
          </label>
        </div>
      </div>
    </div>
  );
};

export default ScoreDashboard;
