import React from "react";
import UseData from "../../Hooks/UseData";
import Footer from "../../Share/Footer";
import PageTitle from "../../Share/PageTitle";
import LineItem from "./LineItem";
import ResumeCardTwo from "./ResumeCardTwo";

const ResumeTwo = () => {
  const { lineArray } = UseData();
  return (
    <>
      <PageTitle title="Resume"></PageTitle>
      {/* End pagetitle */}

      <section className="bg-white  lg:rounded-2xl dark:bg-[#111111]">
        <div data-aos="fade">
          <div className="container sm:px-5 md:px-10 lg:px-14">
            <div className="px-4 py-12 md:px-0">
              {/*Resume page title */}
              <h2 className="after-effect after:left-44">Resume</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-6 gap-y-6 mt-[30px]">
                {/* resume items map */}
                <ResumeCardTwo />
              </div>
            </div>
          </div>
          {/* End .container */}

          <div className="container bg-color-810 dark:bg-[#0D0D0D] py-12 px-2 sm:px-5 md:px-10 lg:px-20">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="col-span-1">
                <h4 className="mb-6 text-5xl font-medium dark:text-white">
                  Working Skills
                </h4>
                {/* Experience percent element */}
                {lineArray.map((item, i) => (
                  <LineItem item={item} key={i} />
                ))}
              </div>

              {/* knowledge section start */}

              <div className="col-span-1">
                <h4 className="mb-8 text-5xl font-medium dark:text-white">
                  Knowledges
                </h4>

                {/* Knowledges items */}

                <div className="flex gap-y-5 gap-x-2.5 flex-wrap">
                  <button className="resume-btn">JavaScript</button>
                  <button className="resume-btn">Cypress</button>
                  <button className="resume-btn">TypeScript</button>
                  <button className="resume-btn">VueJS</button>
                  <button className="resume-btn">MongoDB</button>
                  <button className="resume-btn">ExpressJS</button>
                  <button className="resume-btn">ReactJS</button>
                  <button className="resume-btn">NodeJS</button>
                  <button className="resume-btn">SQL</button>
                </div>
              </div>

              {/* knowledge section end */}
            </div>
          </div>
          {/* End .container */}

          <Footer condition={false} bg={"#FFFF"} />
        </div>
      </section>
    </>
  );
};

export default ResumeTwo;
