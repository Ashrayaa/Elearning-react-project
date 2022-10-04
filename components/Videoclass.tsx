import React from "react";
import Physics from "/public/physics.svg"
import Image from "next/image";
import Chemistry from "/public/chemistry.svg"
import Maths from "/public/maths.svg"
import Biology from "/public/biology.svg"

type Props = {};

export default function Videoclass({}: Props) {
  return (
    <div className="lg:ml-80 ">
      <h2 className="text-xl ml-8 font-semibold lg:text-3xl">
        <span className="text-[#00C285]">Learn</span>{" "}
        with Video Classes
      </h2>
    <div className="flex flex-wrap p-6 gap-4 mx-2 lg:gap-16">
        <div className="w-24">
            <Image src={Physics} />
            <h4>Physics</h4>
            <p>14 Chapters</p>
        </div>

        <div className="w-24">
            <Image src={Chemistry} />
            <h4>Chemistry</h4>
            <p>14 Chapters</p>
        </div>

        <div className="w-24">
            <Image src={Maths} />
            <h4>Maths</h4>
            <p>14 Chapters</p>
        </div>

        <div className="w-24">
            <Image src={Biology} />
            <h4>Biology</h4>
            <p>14 Chapters</p>
        </div>
        <div className="w-24">
            <Image src={Physics} />
            <h4>Physics</h4>
            <p>14 Chapters</p>
        </div>

        <div className="w-24 ">
            <Image src={Chemistry} />
            <h4>Chemistry</h4>
            <p>14 Chapters</p>
        </div>

        <div className="w-24">
            <Image src={Maths} />
            <h4>Maths</h4>
            <p>14 Chapters</p>
        </div>

        <div className="w-24">
            <Image src={Biology} />
            <h4>Biology</h4>
            <p>14 Chapters</p>
        </div>
        
        <div className="w-24">
            <Image src={Physics} />
            <h4>Physics</h4>
            <p>14 Chapters</p>
        </div>
    </div>
    </div>
  );
}
