import React from "react";

const AboutCard = ({ item, local }) => {
  return (
    <div
      style={{ background: `${local === "dark" ? "transparent" : item?.bg}` }}
      className="about-box dark:bg-transparent"
    >
      <img className="block object-contain w-10 h-10" src={item.icon} alt="" />

      <div className="space-y-2 break-all">
        <h3 className="text-xl font-semibold break-normal dark:text-white">{item?.title}</h3>
        <p className=" leading-8 text-gray-lite dark:text-[#A6A6A6] break-normal">
          {item?.des}
        </p>
      </div>
    </div>
  );
};
export default AboutCard;
