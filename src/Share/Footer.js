import React from "react";
import UseData from "../Hooks/UseData";
import useCurrentYear from "../Hooks/useCurrentYear";

const Footer = ({ bg, condition }) => {
  const { local } = UseData();
  const currentYear = useCurrentYear();
  return (
    <footer
      style={{
        background: `${
          local === "light" ? bg : condition ? "#212425" : "transparent"
        }`,
      }}
      className="overflow-hidden rounded-b-2xl"
    >
      <p className="py-6 text-center text-gray-lite dark:text-color-910 ">
        {`© ${currentYear} All Rights Reserved by `}
        <a
          className="hover:text-[#FA5252] duration-300 transition"
          href="https://github.com/gitgud5/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Muhammad Umar
        </a>
        .
      </p>
    </footer>
  );
};

export default Footer;
