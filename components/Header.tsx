import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Image from "next/image";
import Logopaperlms from "/public/logopaperlms.svg";
import Homeicon from "/public/homeicon.svg";
import Searchicon from "/public/search.png";
import Bellicon from "/public/bell.png";
import Avatar from "/public/avatar.png";

type Props = {};
// type Props = {
//     listname: string;
//     img: number;
// }

export default function Header({}: Props) {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="lg:h-20 h-20 shadow-sm border-b-2 bg-[#FAFFFD] lg:shadow-sm lg:border-b-2 lg:bg-[#FAFFFD]">
      {/* Mobile first approach : Menu icon, logo and other icons are shown on the nav bar */}
      <div
        className="flex lg:flex p-6 space-x-10 lg:flex-row md:justify-end"
        onClick={handleNav}
      >
        <div className="lg:hidden">
          {!nav ? (
            <AiOutlineClose size={35} color={"black"} />
          ) : (
            <AiOutlineMenu size={35} />
          )}
        </div>
        <div className="w-16 md:hidden">
          <Image src={Logopaperlms} />
        </div>
        <div className="flex gap-8 ">
          <div className="w-8">
            <Image src={Searchicon} />
          </div>
          <div className="w-8">
            <Image src={Bellicon} />
          </div>
          <div className="w-8">
            <Image src={Avatar} />
          </div>
        </div>
      </div>

      <div
        className={
          !nav
            ? " fixed p-8 lg:w-[17%] sm:w-[49%] md:w-[60%] sm:top-0 lg:p-14 left-0 top-[12%] h-full w-[77%] lg:fixed z-10 bg-[#00C285] ease-in-out duration-150"
            : "fixed left-[100%]"
        }
      >
        <div className="">
          <Image src={Logopaperlms} />
        </div>
        <ul className="pt-12">
          <li className="text-white text-xl font-semibold py-6 hover:bg-white hover:text-[#00C285] hover:rounded-l-full  hover:w-72 hover:p-8 lg:hover:w-60">
            {/* <Image src={Homeicon} className="outline-white" /> */}
            Home
          </li>
          <li className="text-white text-xl font-semibold py-6 hover:bg-white hover:text-[#00C285] hover:rounded-l-full hover:w-72 hover:p-8 lg:hover:w-60">
            My Courses
          </li>
          <li className="text-white text-xl font-semibold py-6 hover:bg-white hover:text-[#00C285] hover:rounded-l-full hover:w-72 hover:p-8 lg:hover:w-60">
            Mock Test
          </li>
          <li className="text-white text-xl font-semibold py-6 hover:bg-white hover:text-[#00C285] hover:rounded-l-full hover:w-72 hover:p-8 lg:hover:w-60">
            Practice
          </li>
        </ul>
        <div></div>
      </div>

      {/* <div className="flex flex-row space-x-2 justify-center">
        <Image src={props.img} />
        <div className="text-white text-xl font-semibold py-6 hover:bg-white hover:text-[#00C285] hover:rounded-l-full hover:w-64 hover:p-8">
          <a href="#">{Props.listname}</a>
        </div>
      </div> */}
    </div>
  );
}
