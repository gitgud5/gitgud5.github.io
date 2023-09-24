import React from "react";
import { Link } from "react-router-dom";
import PageTitle from "./PageTitle";

const NotFound = () => {
  return (
    <>
      <PageTitle title="404"></PageTitle>
      <div className="flex flex-col items-center justify-center w-full h-screen bg-fixed bg-center bg-no-repeat bg-cover bg-homeBg-dark">
        <h1 className="font-extrabold leading-none text-white text-7xl md:text-8xl">
          Hey there :)
        </h1>
        <p className="px-4 mt-6 text-sm text-center text-white capitalize text-medium mb-7">
          Are you lost?
        </p>

        <Link
          to="/"
          className="flex items-center mx-auto bg-gradient-to-r from-[#387072] to-[#3c5670] duration-200 transition ease-linear hover:bg-gradient-to-l px-8 py-3 text-lg text-white rounded-[5px]"
        >
          You may go back (¬‿¬)
        </Link>
      </div>
    </>
  );
};

export default NotFound;
