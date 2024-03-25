import React from "react";
import cvFile from "../assets/images/cv.pdf";
import {
  FaMapMarkerAlt,
  FaGithub
} from "react-icons/fa";
import img from "../assets/images/about/avatar.png";
import downloadIcon from "../assets/images/download.png";

const HomeCard = () => {
  return (
    <div>
      <div className="w-full mb-6 lg:mb-0  mx-auto   relative bg-white text-center dark:bg-[#111111] px-6 rounded-[20px] mt-[180px] md:mt-[220px] lg:mt-0 ">
        <img
          src={img}
          className="w-[240px] absolute left-[50%] transform -translate-x-[50%] h-[240px] drop-shadow-xl mx-auto  rounded-[20px] -mt-[140px]"
          alt=""
        />
        {/* Social card */}
        <div className="pt-[100px] pb-8">
          <h1 className="mt-6 mb-1 text-5xl font-semibold dark:text-white">
            Khubaib Ahmed
          </h1>
          <h3 className="mb-4 text-[#7B7B7B] inline-block dark:bg-[#1D1D1D] px-5 py-1.5 rounded-lg dark:text-[#A6A6A6]  ">
            Software Developer/QA Automation
          </h3>

          {/* Social Links */}

          <div className="flex justify-center space-x-3">
            <a
              href="https://github.com/Algorithm-Alchemist"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="socialbtn text-[#171515] dark:text-[#3f4d57] ">
                <FaGithub />
              </span>
            </a>
          </div>

          {/* personal information */}
          <div className="p-7 rounded-2xl mt-7  bg-[#F3F6F6] dark:bg-[#1D1D1D]">
            <div className="flex border-b border-[#E3E3E3] dark:border-[#3D3A3A] py-2.5">
              <span className="flex-shrink-0 socialbtn bg-white dark:bg-black text-[#FD7590] shadow-md">
                <FaMapMarkerAlt />
              </span>
              <div className="text-left ml-2.5">
                <p className="text-xs text-[#44566C] dark:text-[#A6A6A6]">
                  Location
                </p>
                <p className="break-all dark:text-white">Pakistan</p>
              </div>
            </div>
          </div>

          <a
            href={cvFile}
            download
            className="inline-flex items-center mx-auto bg-gradient-to-r from-[#FA5252] to-[#DD2476] duration-200 transition ease-linear hover:bg-gradient-to-l px-8 py-3 text-lg text-white rounded-[35px] mt-6"
          >
            <img src={downloadIcon} alt="icon" className="mr-2" />
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
