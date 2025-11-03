import card1 from "../assets/keyword.svg";
import card2 from "../assets/content.svg";
import card3 from "../assets/format.svg";
import card4 from "../assets/section.svg";
import card2_last from "../assets/card2_last.svg";
import danger from "../assets/danger.svg";
import danger_last from "../assets/danger_last.svg";
import { HiOutlineArrowSmDown } from "react-icons/hi";
import { PiDownloadBold } from "react-icons/pi";
import CircularProgressbar from "./CircularProgress.jsx";
import LineProgress from "./LineProgress.jsx";
const ScoreDashboard = () => {
  return (
    <div className="mt-9 mx-auto max-w-7xl px-2 md:px-6 lg:px-5 lg:py-3">
      {/* headlines */}
      <div className="flex flex-col justify-center items-center space-y-1 sm:space-y-2 lg:space-y-1">
        <p className="bg-[#4E56C0] text-sm text-white p-2.5 lg:px-5  font-[Outfit] border rounded-lg font-extralight tracking-wide">
          {" "}
          Analysis Complete
        </p>
        <h1 className="font-[League Spartan] font-medium lg:text-[40px] sm:text-2xl text-center text-xl">
          ATS Score Dashboard
        </h1>
        <p className=" text-[#00000066] font-[Outfit] text-[16px] sm:text-sm lg:text-base">
          Results for : (Resume Name.extension)
        </p>
      </div>
      <div className="max-w-[1200px] w-full mx-auto px-2.5 sm:px-5 lg:px-0">
        {/* progress bar */}
        <div className=" px-2.5 pt-3 lg:pt-10 sm:px-5 lg:px-16 font-[Outfit]">
          <div className="w-full  space-y-2.5">
            <div className="bg-[#FFFFFF] rounded-2xl border  border-[#4E56C0] px-2 py-5 lg:py-5 w-full lg:px-6 shadow-[0_4px_35px_0_rgba(0,0,0,0.25)]">
              <div className="p-2 sm:p-3 lg:p-3 flex justify-between ">
                <div className="flex flex-col justify-start items-start space-y-2 lg:pt-5">
                  <h1 className="font-[Outfit] font-medium lg:text-[40px] sm:text-2xl text-base">
                    Overall ATS Score
                  </h1>
                  <p className="text-[13px] sm:text-sm lg:text-[23px] w-[145px] sm:w-full md:w-auto text-[#000000] font-light font-[Kumbh Sans]">
                    Your resume has a good ATS compatibility score
                  </p>

                  <button className="bg-[#4E56C0] text-[9px] sm:text-[11px] lg:text-[13px] lg:text-sm text-[#FFFFFF] p-1.5 sm:p-2 lg:p-2.5 font-[League Spartan] border rounded-lg font-extralight tracking-wide">
                    Score: Good
                  </button>
                </div>
                <div className="w-[85px] h-[85px] sm:w-[100px] sm:h-[100px] lg:w-[188px] lg:h-[188px]">
                  <CircularProgressbar value={87} />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 4 div's */}
        <div className="px-2.5 pt-8 sm:pt-8 sm:px-5 lg:pt-12  xl:px-16 max-w-[1200px] mx-auto w-full lg:px-16 font-[Outfit]">
          <div className="flex flex-col gap-y-4 sm:grid sm:grid-cols-2 sm:gap-4 sm:gap-x-6 sm:gap-y-8 lg:gap-x-12 lg:gap-y-10 xl:gap-x-24 xl:gap-y-14 sm:space-y-0">
            <div className="flex justify-start items-center text-start rounded-2xl sm:justify-center [@media(min-width:375px)]:justify-center shadow-[0_4px_20px_0_#00000040] p-4 sm:p-5 lg:py-9 space-x-5 lg:space-x-4">
              <img
                src={card1}
                alt="Card1"
                className="w-10 h-10 lg:w-[60px] lg:h-[60px] xl:w-[70px] xl:h-[70px] items-center "
              />

              <LineProgress label="Keyword Match" value={83} color="#7CBD1E" />
            </div>
            <div className="flex justify-start items-center text-start [@media(min-width:375px)]:justify-center
 rounded-2xl shadow-[0_4px_20px_0_#00000040] p-4 sm:p-5 lg:py-9 space-x-5 lg:space-x-4 sm:justify-center">
              <img
                src={card2}
                alt="Card2"
                className="w-10 h-10 lg:w-[60px] lg:h-[60px] xl:w-[70px] xl:h-[70px] items-center "
              />

              <LineProgress
                label="Content Quality"
                color="#0088FF"
                value={98}
              />
            </div>
            <div className="flex justify-start items-center text-start rounded-2xl [@media(min-width:375px)]:justify-center
 shadow-[0_4px_20px_0_#00000040] p-4 sm:p-5 lg:py-9 space-x-5 lg:space-x-4 sm:justify-center">
              <img
                src={card3}
                alt="Card3"
                className="w-10 h-10 lg:w-[60px] lg:h-[60px] xl:w-[70px] xl:h-[70px] items-center "
              />

              <LineProgress
                label="Format Compatibility"
                value={88}
                color="#6800BC"
              />
            </div>
            <div className="flex justify-start items-center text-start rounded-2xl [@media(min-width:375px)]:justify-center
 shadow-[0_4px_20px_0_#00000040] p-4 sm:p-5 lg:py-9 space-x-5 lg:space-x-4 sm:justify-center">
              <img
                src={card4}
                alt="Card4"
                className="w-10 h-10 lg:w-[60px] lg:h-[60px] xl:w-[70px] xl:h-[70px] items-center "
              />

              <LineProgress
                label="Section Optimization"
                value={99}
                color="#00992D"
              />
            </div>
          </div>
        </div>
        {/* Last 2 div */}
        <div className="flex flex-col pt-8 lg:pt-14 font-[Outfit] space-y-5 px-2.5 sm:px-5  xl:px-16 max-w-[1200px] mx-auto w-full  sm:pt-8      lg:px-16  sm:grid sm:grid-cols-2  sm:space-y-0 sm:gap-5 sm:gap-x-6 lg:gap-x-12 xl:gap-x-24 ">
          {/* div1 */}
          <div className="flex flex-col border border-[#8FCBFF] rounded-2xl shadow-[0_4px_20px_0_#00000040] p-5 lg:py-5   ">
            <div className="flex space-x-4 lg:space-x-5  items-center lg:px-2  lg:pt-3">
              <img
                src={card2}
                alt="Card2"
                className="w-[45px] h-[45px] lg:w-[50px] lg:h-[50px]"
              />
              <p className="text-lg font-normal text-center lg:text-[32px]">
                Strengths
              </p>
            </div>
            <div className="pt-5 lg:pt-7 space-y-2.5 font-normal lg:text-[16px] text-[13px]  ">
              <p className=" flex text-start items-center ">
                <span className="w-[30px] h-[30px] lg:w-6 lg:h-6">
                  <img src={card2_last} alt="Card2" />
                </span>
                Quantifiable achievements included
              </p>
              <p className="flex text-start items-center ">
                <span className="w-[30px] h-[30px] ">
                  <img src={card2_last} alt="Card2" />
                </span>
                Proper section formatting
              </p>
              <p className="flex text-start items-center ">
                <span className="w-[30px] h-[30px] ">
                  <img src={card2_last} alt="Card2" />
                </span>
                No spelling or grammar errors detected
              </p>
            </div>
          </div>
          {/* div2 */}
          <div className="flex flex-col border border-[#8FCBFF] rounded-2xl shadow-[0_4px_20px_0_#00000040] p-5   ">
            <div className="flex space-x-4 lg:space-x-5  items-center lg:px-2  lg:pt-2.5 ">
              <img
                src={danger}
                alt="Card2"
                className="w-[45px] h-[45px] lg:w-[50px] lg:h-[50px]"
              />
              <p className="text-lg font-normal text-center lg:text-[32px]">
                Areas to Improve
              </p>
            </div>
            <div className="pt-5 lg:pt-7 space-y-2.5 lg:text-[16px] text-[13px]">
              <p className=" flex text-start items-center ">
                <span className="w-[30px] h-[30px] ">
                  <img src={danger_last} alt="Card2" />
                </span>
                Missing important keywords for your industry
              </p>
              <p className=" flex text-start items-center ">
                <span className="w-[30px] h-[30px] ">
                  <img src={danger_last} alt="Card2" />
                </span>
                Summary section could be more impactful
              </p>
              <p className=" flex text-start items-center ">
                <span className="w-[30px] h-[30px] ">
                  <img src={danger_last} alt="Card2" />
                </span>
                Some bullet points lack metrics
              </p>
            </div>
          </div>
        </div>
        {/* Last 2 buttons */}
        <div className="flex flex-col flex-wrap justify-center items-center pt-5 lg:pt-9 sm:pt-7 space-y-4 font-[Outfit] sm:flex-row sm:space-y-0 sm:space-x-5 lg:space-x-9 ">
          <label
            htmlFor="btn-recommendation"
            className="relative cursor-pointer rounded-lg bg-[#454cb3] font-extralight text-white p-3 lg:pt-3.5 lg:px-4"
          >
            <p className="flex gap-1.5 text-sm sm:text-base lg:text-[24px]">
              View Recommendations
              <span className="pt-0.5 lg:pt-2 text-[#FFFFFF] ">
                <HiOutlineArrowSmDown />
              </span>
            </p>
            <input
              id="recommendation"
              type="file"
              name="file-upload"
              className="sr-only"
            />
          </label>
          <label
            htmlFor="btn-reports"
            className="relative cursor-pointer border border-[#4E56C0] rounded-lg bg-white font-normal text-[#4E56C0] p-3 lg:px-4 font-[Outfit]"
          >
            <p className="flex gap-2  text-sm sm:text-base lg:text-[22px]">
              <span className="pt-0.5 lg:pt-2">
                <PiDownloadBold />
              </span>
              Download Reports
            </p>
            <input
              id="reports"
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
