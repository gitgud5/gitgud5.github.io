import React from "react";
import UseData from "../../Hooks/UseData";
import Footer from "../../Share/Footer";
import "../../Share/Style.css";
// import SliderCommon from "../../Share/SliderCommon";
import AboutCard from "./AboutCard";
import HomeCard from "../../Share/HomeCard";
import PageTitle from "../../Share/PageTitle";

const AboutTwo = () => {
  const { local, serviceArray } = UseData();

  return (
    <section>
      <PageTitle title="About"></PageTitle>
      {/* End pagetitle */}

      <div className=" lg:rounded-2xl bg-white dark:bg-[#111111]">
        <div data-aos="fade">
          <div className="px-2 pt-12 md:py-12 sm:px-5 md:px-10 lg:px-14">
            {/* About page title */}
            <h2 className="hidden after-effect after:left-52 lg:block">
              About Me
            </h2>
            <div className="lg:hidden">
              {/* Sidebar personal information for mobile devices */}
              <HomeCard />
              <div className=" md:gap-10 mb-12 md:pt-[30px] items-center lg:hidden ">
                <h2 className="mb-5 after-effect after:left-52">About Me</h2>
                <div className="col-span-12 space-y-2.5">
                  <div className="lg:mr-16">
                    <p className="leading-7 text-gray-lite dark:text-color-910">
                    Greetings! I'm Khubaib, a versatile QA Automation Engineer deeply immersed in MERN (MongoDB, Express.js, React.js, Node.js) Stack development. With a passion for ensuring software quality and a flair for crafting robust testing solutions, I bring a unique blend of automation expertise and full-stack proficiency to every project I undertake.
                    </p>
                    <p className="text-gray-lite leading-7 mt-2.5 dark:text-color-910">
                      My goal is to leverage technology to simplify complex
                      processes and provide intuitive, efficient experiences.
                      Whether it's optimizing user interfaces or delving into
                      the world of algorithms, I'm here to make technology work
                      smarter for you.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:grid grid-cols-12 md:gap-10 pt-4 md:pt-[30px] items-center hidden ">
              <div className="col-span-12 space-y-2.5">
                <div className="lg:mr-16">
                  <p className="leading-7 text-gray-lite dark:text-color-910">
                    I'm a MERN Stack Developer, with a passion for crafting
                    seamless web applications and a keen interest in the world
                    of machine learning. My expertise lies in building robust
                    web solutions using the MERN (MongoDB, Express, React,
                    Node.js) stack, ensuring that user experiences are both
                    functional and delightful.
                  </p>
                  <p className="text-gray-lite leading-7 mt-2.5 dark:text-color-910">
                    My goal is to leverage technology to simplify complex
                    processes and provide intuitive, efficient experiences.
                    Whether it's optimizing user interfaces or delving into the
                    world of algorithms, I'm here to make technology work
                    smarter for you.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* End about descriptions */}

          <div className="px-2 pb-12 sm:px-5 md:px-10 lg:px-14">
            <h3 className="text-[35px] dark:text-white font-medium pb-5">
              What I do!
            </h3>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-2 ">
              {/* Experience information  */}

              {serviceArray.map((item) => (
                <AboutCard key={Math.random()} item={item} local={local} />
              ))}
            </div>
          </div>
          {/* service provide end */}

          {/* REMEMEBER to add clients here when I have some clients XD */}
          {/* <div className="px-2 sm:px-5 md:px-10 lg:px-14 "> */}
          {/* Slick Slider call here  */}
          {/* <SliderCommon /> */}
          {/* </div> */}

          {/* Common Footer call here */}
          <Footer bg={"#FFFF"} />
        </div>
      </div>
    </section>
  );
};

export default AboutTwo;
