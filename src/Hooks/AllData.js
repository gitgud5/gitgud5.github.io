import { useEffect, useState } from "react";
// for work_images
import work1 from "../assets/images/work_images/homie-app.png";
import work2 from "../assets/images/work_images/trenda.png";
// works small images
import workSmall1 from "../assets/images/work_images/small/homie-app-small.png";
import workSmall2 from "../assets/images/work_images/small/trenda-small.png";

import img1 from "../assets/images/slider/brand-1.png";
import img2 from "../assets/images/slider/brand-2.png";
import img3 from "../assets/images/slider/brand-3.png";
import img4 from "../assets/images/slider/brand-4.png";
import img5 from "../assets/images/slider/brand-5.png";
//  icon use as img here
import icon from "../assets/images/icons/icon-1.svg";
import icon1 from "../assets/images/icons/icon-2.svg";
import icon2 from "../assets/images/icons/icon-3.svg";
import icon3 from "../assets/images/icons/icon-4.svg";
import icon4 from "../assets/images/icons/icon-5.svg";
import icon5 from "../assets/images/icons/icon-6.svg";
// contact image
import { CgNotes } from "react-icons/cg";
import { FaRegUser } from "react-icons/fa";
import { FiCodesandbox } from "react-icons/fi";
import { RiContactsBookLine } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";

const AllData = () => {
  const [check, setCheck] = useState(false);
  const [local, setLocal] = useState(localStorage.getItem("theme"));
  const [singleData, setSingleData] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  // dark and light theme controls
  useEffect(() => {
    const themeValue = localStorage?.getItem("theme");

    if (!themeValue) {
      setCheck(false);
      localStorage.setItem("theme", "light");
    } else {
      themeValue === "dark" && setCheck(true);
      themeValue === "light" && setCheck(false);
    }

    localStorage?.getItem("theme") === "dark"
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, []);

  // Create and light theme function
  const handleTheme = (value) => {
    if (value === "light") {
      setCheck(false);
      localStorage.setItem("theme", "light");
      setLocal("light");
    } else {
      setCheck(true);
      localStorage.setItem("theme", "dark");
      setLocal("dark");
    }
    localStorage?.getItem("theme") === "dark"
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  };

  // fillter portfilo data
  const handleData = (text) => {
    if (text === "All") {
      setData(workItems);
    } else {
      const findData = workItems.filter((item) => item.tag === text);
      setData(findData);
    }
  };

  // find items for portfilo  modal open
  const handleModelData = (id) => {
    const find = workItems.find((item) => item?.id === id);
    setSingleData(find);
    setIsOpen(true);
  };


  // Active navlinks function
  function NavLink({
    to,
    className,
    activeClassName,
    inactiveClassName,
    ...rest
  }) {
    let location = useLocation();
    let isActive = location.pathname === to;
    let allClassNames =
      className + (isActive ? `${activeClassName}` : `${inactiveClassName}`);
    return <Link className={allClassNames} to={to} {...rest} />;
  }

  // Elements for protfilo section
  const workItems = [
    {
      id: "1",
      tag: "MERN",
      title: "Homie App",
      img: work1,
      imgSmall: workSmall1,
      bg: "#FFF0F0",
      client: "Homie Inc",
      langages: "JavaScript, Python",
      // link: "https://www.envato.com",
      // linkText: "Not live anymore",
      description:
        "",
    },
    {
      id: "2",
      tag: "MERN",
      title: "Trenda",
      img: work2,
      imgSmall: workSmall2,
      bg: "#FFF3FC",
      client: "Trenda Inc",
      langages: "JavaScript",
      // link: "https://skillgigs.com/",
      // linkText: "Skillgigs link",
      description:
        "",
    },
    // {
    //   id: "3",
    //   tag: "Logo",
    //   title: "Chul urina",
    //   img: work3,
    //   imgSmall: workSmall3,
    //   bg: "#FFF0F0",
    //   client: "Freepik",
    //   langages: "Illustrator",
    //   link: "https://www.freepik.com/free-photos-vectors/market-logo",
    //   linkText: "www.freepik.com",
    //   description:
    //     "  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate non suscipit voluptatibus minima ullam maiores sequi nihil placeat error, vero eaque doloremque reiciendis amet pariatur consequuntur. Nostrum, dolore, amet eligendi ipsam enim quisquam, corrupti asperiores nihil excepturi aspernatur placeat iure.",
    // },
  ];
  const [data, setData] = useState(workItems);


  // Menu items for Homepage Two
  const menuItemTwo = [
    {
      id: "01",
      name: "About",
      link: "/about",
      icon: <FaRegUser />,
    },
    {
      id: "02",
      name: "Resume",
      link: "/resume",
      icon: <CgNotes />,
    },
    {
      id: "03",
      name: "Works",
      link: "/works",
      icon: <FiCodesandbox />,
    },
    {
      id: "04",
      name: "Contact",
      link: "/contact",
      icon: <RiContactsBookLine />,
    },
  ];

  // Slider image for Clients
  const sliderImg = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img1,
    img2,
    img3,
    img4,
    img5,
  ];

  // serviceArray items for about page
  const serviceArray = [
    {
      id: "1",
      icon: icon5,
      title: "QA Automation",
      des: "Expertise in designing, implementing, and maintaining robust automated testing solutions to ensure software quality and streamline QA processes.",
      color: "#8774FF",
      bg: "#FCF4FF",
    },
    {
      id: "2",
      icon: icon,
      title: "Frontend Development",
      des: "Building dynamic, responsive web applications from scratch and enhance existing apps.",
      color: "#D566FF",
      bg: "#FCF4FF",
    },
    {
      id: "3",
      icon: icon1,
      title: "Backend Development",
      des: "Developing robust server-side applications using Node.js and Express.js. Designing and implementing RESTful or GraphQL APIs.",
      color: "#DDA10C",
      bg: "#FEFAF0",
    },
    {
      id: "4",
      icon: icon2,
      title: "Database Management",
      des: "Setting up and managing databases, including MongoDB, MySQL, or PostgreSQL. Designing efficient database schemas and optimizing queries.",
      color: "#8774FF",
      bg: "#FCF4FF",
    },
    {
      id: "5",
      icon: icon3,
      title: "Authentication and Authorization",
      des: "Implementing user authentication systems using OAuth, JWT, or other methods. Configuring role-based access control (RBAC) for user permissions.",
      color: "#FF6080",
      bg: "#FFF4F4",
    },
    {
      id: "6",
      icon: icon4,
      title: "API Integration",
      des: "Connecting to third-party APIs to fetch and display data within web applications. Developing custom APIs for clients or partners.",
      color: "#FF75D8",
      bg: "#FFF0F8",
    },
  ];

  // educationArray items for Resume page
  const educationArray = [
    {
      id: 1,
      date: "2015-2019",
      title: "Bachelor of Science in Computer Science",
      place: "COMSATS University Islamabad (CUI)",
      bg: "#FFF4F4",
    },
  ];
  // experiencesArray items for Resume page
  // Change some code so I can easily display experiences in reverse order where the array is being rendered.
  const experiencesArray = [
    {
      id: 1,
      date: "Jan 2021 - Current",
      title: "Full Stack Engineer",
      place: "Al Burraq Technology - Pakistan",
      bg: "#F2F4FF",
    },
    {
      id: 2,
      date: "September 2023 - Present",
      title: "Sr. Full Stack Engineer",
      place: "Work Tech - Pakistan",
      bg: "#EEF5FA",
    },
  ];

  // Working Skills items for Resume page
  const lineArray = [
    {
      id: "01",
      color: "#FF6464",
      name: "Cypress",
      number: "90",
    },
    {
      id: "02",
      color: "#9272D4",
      name: "Playwright",
      number: "80",
    },
    {
      id: "03",
      color: "#5185D4",
      name: "VueJS",
      number: "80",
    },
    {
      id: "03",
      color: "#CA56F2",
      name: "Laravel",
      number: "80",
    },
  ];


  return {
    handleTheme,
    check,
    local,
    handleData,
    data,
    singleData,
    handleModelData,
    isOpen,
    setIsOpen,
    // blogsData,
    // handleBlogsData,
    NavLink,
    menuItemTwo,
    serviceArray,
    sliderImg,
    educationArray,
    experiencesArray,
    lineArray,
  };
};

export default AllData;
