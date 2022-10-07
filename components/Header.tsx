import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Image from "next/image";
import Logopaperlms from "/public/logopaperlms.svg";
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
            <AiOutlineClose size={35}  />
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
            ? " fixed p-8 lg:w-[17%] sm:w-[49%] md:w-[60%] sm:top-0 lg:p-14 left-0 top-[10%] h-full w-[77%] lg:fixed z-10 bg-[#00C285] ease-in-out duration-150"
            : "fixed left-[100%]"
        }
      >
        <div className="">
          <Image src={Logopaperlms} />
        </div>
        <ul className="pt-12">
          <li className="text-white flex gap-4 text-xl font-semibold py-6 hover:bg-white hover:text-[#00C285] hover:rounded-l-full  hover:w-72 hover:p-8 lg:hover:w-60">
            {/* <Image src={Homeicon} className="outline-white" /> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
            Home
          </li>
          <li className="text-white flex gap-4 text-xl font-semibold py-6 hover:bg-white hover:text-[#00C285] hover:rounded-l-full hover:w-72 hover:p-8 lg:hover:w-60">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 lg:w-5 h-6"
            >
              <path d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 014.653-2.52.75.75 0 00-.65-1.352 56.129 56.129 0 00-4.78 2.589 1.858 1.858 0 00-.859 1.228 49.803 49.803 0 00-4.634-1.527.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z" />
              <path d="M13.06 15.473a48.45 48.45 0 017.666-3.282c.134 1.414.22 2.843.255 4.285a.75.75 0 01-.46.71 47.878 47.878 0 00-8.105 4.342.75.75 0 01-.832 0 47.877 47.877 0 00-8.104-4.342.75.75 0 01-.461-.71c.035-1.442.121-2.87.255-4.286A48.4 48.4 0 016 13.18v1.27a1.5 1.5 0 00-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.661a6.729 6.729 0 00.551-1.608 1.5 1.5 0 00.14-2.67v-.645a48.549 48.549 0 013.44 1.668 2.25 2.25 0 002.12 0z" />
              <path d="M4.462 19.462c.42-.419.753-.89 1-1.394.453.213.902.434 1.347.661a6.743 6.743 0 01-1.286 1.794.75.75 0 11-1.06-1.06z" />
            </svg>
            My Courses
          </li>
          <li className="text-white flex gap-4 text-xl font-semibold py-6 hover:bg-white hover:text-[#00C285] hover:rounded-l-full hover:w-72 hover:p-8 lg:hover:w-60">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fill-rule="evenodd"
                d="M4.125 3C3.089 3 2.25 3.84 2.25 4.875V18a3 3 0 003 3h15a3 3 0 01-3-3V4.875C17.25 3.839 16.41 3 15.375 3H4.125zM12 9.75a.75.75 0 000 1.5h1.5a.75.75 0 000-1.5H12zm-.75-2.25a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5H12a.75.75 0 01-.75-.75zM6 12.75a.75.75 0 000 1.5h7.5a.75.75 0 000-1.5H6zm-.75 3.75a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5H6a.75.75 0 01-.75-.75zM6 6.75a.75.75 0 00-.75.75v3c0 .414.336.75.75.75h3a.75.75 0 00.75-.75v-3A.75.75 0 009 6.75H6z"
                clip-rule="evenodd"
              />
              <path d="M18.75 6.75h1.875c.621 0 1.125.504 1.125 1.125V18a1.5 1.5 0 01-3 0V6.75z" />
            </svg>
            Mock Test
          </li>
          <li className="text-white flex gap-4 text-xl font-semibold py-6 hover:bg-white hover:text-[#00C285] hover:rounded-l-full hover:w-72 hover:p-8 lg:hover:w-60">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
              />
            </svg>
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
