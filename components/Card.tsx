import React from "react";
import Image from "next/image";
import Liveclassbg from "public/liveclassbg.png";
import Star from "public/star.png";

type Props = {};

export default function Card({}: Props) {
  return (
    <div className="bg-[#FAF5FE] rounded-xl flex flex-col relative md:w-[50%]">
      <div className="relative">
        <Image src={Liveclassbg} height="1400" />
      </div>

      <div className="absolute ml-32 md:ml-[55%]">
        <button className="bg-[#C13232] ml-28 border-0 mt-6 md:mt-10 text-white font-semibold p-2 px-4 rounded-lg">
          . Live
        </button>
        <h1 className="bg-[#FB773D] mt-8 md:mt-28 ml-1.5 text-white font-semibold md:p-6 p-4 text-xl rounded-l-lg w-52 md:w-60">
          Aleena Sara
        </h1>
        <div className="flex flex-col gap-1 mt-2 text-xs ml-8">
          {" "}
          <p className="text-white font-medium">B-tech - BITS Pailani</p>
          <div className="border-b-2 border-[#FB773D] w-32"></div>
          <p className="text-white font-semibold">Chemistry Expert</p>
        </div>
      </div>
      <div className="absolute mt-52 md:mt-[63%] md:px-4 bg-[#1A181D] w-[100%]">
        <p className=" text-white text-xs">Start at 10:30am - 432 attending</p>
      </div>

      <div>
        <div className="flex gap-10">
          <div className="flex flex-col gap-1 p-2">
            <p className="text-[#626262] text-xs font-medium">Chemistry</p>
            <p className="font-semibold text-xs">
              Beginner&apos;s Guide: Biomolecules
            </p>
            <p className="text-[#626262] font-medium text-xs mb-4">
              37min By Vaibhav Uppal
            </p>
          </div>

          <div>
            <button className="bg-[#FB773D] text-xs lg:py-2 mt-12 lg:mt-9 text-white font-medium rounded-3xl lg:ml-44 ml-2 p-2 lg:px-5">
              Join Us
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-1 px-2">
          <div className="border-t-2 border-zinc-400"></div>
          <div className="flex gap-3 py-4 ">
            <Image
              src={Star}
              width="15"
              height="1"
              className="border-t-2 border-zinc-400"
            />
            <p className="text-[#626262] text-xs font-medium">Master Class</p>
          </div>
        </div>
      </div>
    </div>
  );
}
