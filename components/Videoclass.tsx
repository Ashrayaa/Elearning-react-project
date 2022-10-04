import React from "react";
import Physics from "/public/physics.svg";
import Image from "next/image";
import Chemistry from "/public/chemistry.svg";
import Maths from "/public/maths.svg";
import Biology from "/public/biology.svg";

type Props = {};

export default function Videoclass({}: Props) {
  return (
    <div className="lg:ml-80">
      <h2 className="text-xl ml-8 font-semibold lg:text-3xl">
        <span className="text-[#00C285]">Learn</span> with Video Classes
      </h2>
      <div className="flex w-screen sm:w-[100%] md:w-[90%] flex-wrap p-6 gap-4 mx-2 sm:gap-16">
        <div className="w-24">
          <Image src={Physics} />
          <div className="flex flex-col items-center">
            <h1 className="font-bold">Physics</h1>
            <p className="text-gray-400 font-medium">14 Chapters</p>
          </div>
        </div>

        <div className="w-24">
          <Image src={Chemistry} />
          <div className="flex flex-col items-center">
            <h4 className="font-bold">Chemistry</h4>
            <p className="text-gray-400 font-medium">14 Chapters</p>
          </div>
        </div>

        <div className="w-24">
          <Image src={Maths} />
          <div className="flex flex-col items-center">
            <h4 className="font-bold">Maths</h4>
            <p className="text-gray-400 font-medium">14 Chapters</p>
          </div>
        </div>

        <div className="w-24">
          <Image src={Biology} />
          <div className="flex flex-col items-center">
            <h4 className="font-bold">Biology</h4>
            <p className="text-gray-400 font-medium">14 Chapters</p>
          </div>
        </div>
        <div className="w-24">
          <Image src={Physics} />
          <div className="flex flex-col items-center">
            <h4 className="font-bold">Physics</h4>
            <p className="text-gray-400 font-medium">14 Chapters</p>
          </div>
        </div>

        <div className="w-24 ">
          <Image src={Chemistry} />
          <div className="flex flex-col items-center">
            <h4 className="font-bold">Chemistry</h4>
            <p className="text-gray-400 font-medium">14 Chapters</p>
          </div>
        </div>

        <div className="w-24">
          <Image src={Maths} />
          <div className="flex flex-col items-center">
            <h4 className="font-bold">Maths</h4>
            <p className="text-gray-400 font-medium">14 Chapters</p>
          </div>
        </div>

        <div className="w-24">
          <Image src={Biology} />
          <div className="flex flex-col items-center">
            <h4 className="font-bold">Biology</h4>
            <p className="text-gray-400 font-medium">14 Chapters</p>
          </div>
        </div>

        <div className="w-24">
          <Image src={Physics} />
          <div className="flex flex-col items-center">
            <h4 className="font-semibold">Physics</h4>
            <p className="text-gray-400 font-medium">14 Chapters</p>
          </div>
        </div>
      </div>
    </div>
  );
}
