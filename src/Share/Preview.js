import React from "react";
import logo from "../assets/images/logo/logo-preview.png";
import homeonelight from "../assets/images/preview/homeonelight.png";
import homeonedark from "../assets/images/preview/homeonedark.png";
import hometwolight from "../assets/images/preview/hometwolight.png";
import hometwodark from "../assets/images/preview/hometwodark.png";
import previewimg from "../assets/images/preview/preview.png";

// ***************************************************
import { Link } from "react-router-dom";
import UseData from "../Hooks/UseData";
import PageTitle from "./PageTitle";
import useCurrentYear from "../Hooks/useCurrentYear";
// ***************************************************

const Preview = () => {
  const { handleTheme } = UseData();

  // dark and light mode control

  const handle = (e) => {
    handleTheme(e);
  };

  // preview Home page element

  const previewArray = [
    {
      img: homeonedark,
      title: "Card Layout",
      link: "/homeTwo",
      id: "2",
    },
    {
      img: hometwodark,
      title: "Classic Layout",
      link: "/home",
      id: "4",
    },
  ];

  // Getting current year
  const year = useCurrentYear();

  return (
    <>
      <PageTitle title="Preview"></PageTitle>
      <section className="bg-center bg-no-repeat bg-cover bg-previewBg">
        <div className="text-center pt-[100px] pb-[90px] h-[80vh] md:h-[100vh] flex items-center justify-center flex-col">
          {/* Site logo */}
          <img
            className="inline-block h-[26px] lg:h-[46px]"
            src={logo}
            alt="logo"
            data-aos="fade"
          />
          <p
            className="font-extrabold text-[22px] md:text-[26px] xl:text-[32px] 2xl:text-[42px] text-white pt-[20px] "
            data-aos="fade"
          >
            Welcome to my Portfolio, please choose between
            <br className="hidden md:block " />
            <span className="text-[#F95054]">Card View</span> &{" "}
            <span className="text-[#F95054]">Classic View</span>
          </p>

          <div className="flex justify-center mt-6">
            <a
              href="#demo"
              className="flex-shrink-0 inline-flex mr-3 items-center justify-center px-5 md:px-8 py-3 md:py-4 text-sm md:text-base font-semibold leading-6 text-white bg-gradient-to-r hover:bg-gradient-to-l from-[#DD2476]  to-[#fa5252ef] rounded-full shadow-md"
            >
              Choose
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 13l-5 5m0 0l-5-5m5 5V6"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </section>
      {/* End .bg-previewBg */}

      <section
        className="bg-[#000000] bg-no-repeat bg-center bg-cover bg-fixed"
        id="demo"
      >
        <div className="container px-4 lg:px-0 text-center mb-[100px] pt-[80px]">
          <h1 className="text-[#FA5252] text-[32px] md:text-[45px] font-semibold ">
            THE CHOICES
          </h1>
          <img className="block mx-auto " src={previewimg} alt="" />
        </div>
        {/* End .container */}

        <div
          className="px-4 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 mx-auto gap-5 md:gap-[40px] pb-[100px]  "

          data-aos="fade"
        >
          {/* previewimg element start */}
          {previewArray.map((item) => {
            const mode = item.id % 2 === 0 ? "dark" : "light";
            return (
              <div
                onClick={() => handle(mode)}
                className="text-center w-full mx-auto shadow-zinc-400  rounded-[12px] border-4 border-slate-800 border-solid duration-500 transition   hover:border-slate-500"
                key={item.id}
              >
                <Link to={item.link} target="_blank">
                  <img
                    className="w-full cursor-pointer "
                    src={item.img}
                    alt=""
                  />
                </Link>
                <h3 className="bg-gradient-to-r bg-slate-900 rounded-b-[6px] w-full font-medium text-white capitalize py-4  text-[20px]    ">
                  {item.title}
                </h3>
              </div>
            );
          })}

          {/* previewimg element start */}
        </div>
      </section>


      {/* Start Call To Actions */}
      {/* <section className="text-center bg-[#000] py-[120px] ">
        <p
          data-aos="fade"
          className="font-bold text-[22px] md:text-[26px] xl:text-[32px] 2xl:text-[42px] text-white pt-[40px] mx-auto max-w-4xl px-4 "
        >
          Purchase Bostami & Build Your Dream Portfolio{" "}
          <span className="text-[#F95054]">React JS</span> &{" "}
          <span className="text-[#F95054]">Tailwind CSS</span> Portfolio
          Template.
        </p>

        <a
          href="https://themeforest.net/item/bostami-tailwind-css-personal-portfolio-react-template/38598542"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0 inline-flex mt-8 items-center justify-center px-5 md:px-8 py-3 md:py-4 text-sm md:text-base font-semibold leading-6 text-white bg-gradient-to-r from-[#FA5252] to-[#DD2476] hover:bg-gradient-to-l from-[#DD2476]  to-[#fa5252ef] rounded-full shadow-md"
        >
          Purchase Now
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 13l-5 5m0 0l-5-5m5 5V6"
            ></path>
          </svg>
        </a>
      </section> */}
      {/* End call to action */}

      {/* Start Footer */}
      <footer className="bg-slate-800">
        <p className="py-5 text-center text-white ">
          © {year} All Rights Reserved by{" "}
          <a
            className="hover:text-[#FA5252] duration-300 transition"
            href="https://themeforest.net/user/ib-themes"
            target="_blank"
            rel="noopener noreferrer"
          >
            MEEEEEEEE
          </a>
          .
        </p>
      </footer>
      {/* End footer */}
    </>
  );
};

export default Preview;
