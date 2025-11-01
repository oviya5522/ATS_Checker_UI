import React from "react";
import { MdOutlineFileUpload } from "react-icons/md";
import { IoDocumentTextOutline } from "react-icons/io5";

const UploadForm = () => {
  return (
    <div className="mt-2 mx-auto max-w-4xl px-2 md:px-4 lg:px-8">
      <div className="h-auto">
        {/* heading */}
        <div className="py-1.5 sm:py-2.5 lg:py-3 flex flex-col justify-center items-center ">
          <h1 className="font-[Outfit] font-medium lg:text-[40px] sm:text-2xl text-center text-xl">
            Upload Your Resume
          </h1>
          <p
            className=" pt-3 text-[#777777] font-normal  font-[Outfit] text-center
        lg:text-[20px] text-[14px] sm:text-lg
        lg:w-[600px] lg:h-[74px] w-60 h-auto sm:w-[450px]
        lg:leading-8 sm:leading-7 "
          >
            Upload your resume to get an instant ATS compatibility score and
            detailed feedback
          </p>
        </div>
        {/* form */}
        <form
          className="flex flex-col rounded-lg border border-gray-200 justify-start items-start px-2.5 pt-3 sm:px-5 lg:px-14 lg:py-6 sm:py-5 py-3 font-[Outfit] space-y-3 sm:space-y-4 lg:space-y-5
"
        >
          <div className=" w-full flex flex-col justify-start items-start space-y-2.5">
            <label
              htmlFor="name"
              className="font-normal text-sm sm:text-base lg:text-lg"
            >
              Full Name*
            </label>
            <input
              type="text"
              id="text"
              className="bg-[#f3f3f5] border border-gray-300  text-sm sm:text-base lg:text-lg rounded-lg block w-full p-2.5 placeholder:text-[13px]  lg:placeholder:text-base sm:placeholder:text-sm"
              placeholder="Enter Your Full Name"
              required
            />
          </div>
          <div className="w-full flex flex-col justify-start items-start space-y-2.5">
            <label
              htmlFor="email"
              className="font-normal text-sm sm:text-base lg:text-lg"
            >
              Email*
            </label>
            <input
              type="email"
              id="email"
              className="bg-[#f3f3f5] border border-gray-300  text-sm sm:text-base lg:text-lg rounded-lg block w-full p-2.5 placeholder:text-[13px] lg:placeholder:text-base sm:placeholder:text-sm"
              placeholder="Enter Your Email"
              required
            />
          </div>

          <div className="w-full flex flex-col justify-start items-start space-y-2.5">
            <label
              htmlFor="number"
              className="font-normal text-sm sm:text-base lg:text-lg"
            >
              Phone Number*
            </label>
            <input
              type="text"
              id="number"
              className="bg-[#f3f3f5] border border-gray-300  text-sm sm:text-base lg:text-lg rounded-lg block w-full p-2.5 placeholder:text-[13px] lg:placeholder:text-base sm:placeholder:text-sm"
              placeholder="Enter Your Phone Number"
              required
            />
          </div>
          <div className="w-full flex flex-col justify-start items-start space-y-2.5">
            <label
              htmlFor="job_desc"
              className="font-normal text-sm sm:text-base lg:text-lg"
            >
              Job Description
            </label>
            <textarea
              placeholder="Add your job description"
              className="bg-[#f3f3f5] border border-gray-300 text-sm sm:text-base lg:text-lg rounded-lg block w-full h-[120px] p-2.5 placeholder:text-[13px] resize-none leading-tight lg:placeholder:text-base sm:placeholder:text-sm"
            ></textarea>
          </div>
          {/* file upload */}
          <div className="w-full flex flex-col justify-center items-center space-y-2.5">
            <div
              className="bg-[#f3f3f5] flex justify-center items-center rounded-lg border border-dashed border-blue-400 px-4 py-4 sm:px-6 sm:py-5 lg:py-8
 w-full"
            >
              <div className="flex flex-col justify-center items-center text-center">
                <div className="flex  justify-center items-center border border-blue-300 text-blue-400 w-[45px] h-[45px] lg:w-[50px] lg:h-[50px] rounded-lg bg-[#FDCFFA]">
                  <MdOutlineFileUpload className="text-2xl lg:text-3xl" />
                </div>
                <div className="flex flex-col space-y-1 pt-2">
                  <p className=" text-sm sm:text-base lg:text-lg ">
                    Drag & drop your resume here
                  </p>
                  <p className="text-gray-400 text-[12px] sm:text-sm lg:text-sm ">
                    or
                  </p>
                </div>

                <div className="mt-4 flex flex-col justify-center items-center text-sm text-gray-400">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer rounded-md bg-[#4E56C0] font-semibold text-white p-3 font-[Outfit]"
                  >
                    <p className="flex gap-1.5 lg:text-base">
                      <span className="pt-0.5">
                        <IoDocumentTextOutline />
                      </span>
                      Browse Files
                    </p>
                    <input
                      id="file-upload"
                      type="file"
                      name="file-upload"
                      className="sr-only"
                    />
                  </label>
                  <p className="pl-1 pt-2 font-[League Spartan] text-[13px] sm:text-sm lg:text-base">
                    Supported formats: PDF, DOC, DOCX (Max 10MB)
                  </p>
                </div>
              </div>
            </div>
          </div>
          <button className="w-full bg-[#4E56C0] p-2 rounded-lg text-white text-sm sm:text-base">
            Check ATS Score
          </button>
        </form>
      </div>
    </div>
  );
};

export default UploadForm;
