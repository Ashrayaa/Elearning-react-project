import React from "react";
import Card from "./Card";

type Props = {};

export default function Liveclass({}: Props) {
  return (
    <div className="lg:ml-80 mt-8 lg:m-14">
      <h2 className="text-xl ml-8 font-semibold lg:text-3xl">
        <span className="text-[#00C285]">Learn</span> with Live Classes
      </h2>
      <div className="lg:flex lg:flex-row lg:gap-8 lg:py-10 flex flex-col gap-6 p-4 lg:mr-12">
        <Card />
        <Card />
      </div>
    </div>
  );
}
