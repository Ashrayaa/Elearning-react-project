import React from 'react';
import Image from "next/image";
import otpimg from "/public/girl.png";

type Props = {}

export default function Otpleft({}: Props) {
  return (
    <div className=" lg:w-12/12 lg:h-screen lg:m-0 lg:p-16 flex flex-col justify-center p-12 bg-[#DA85A0]">
        <Image src={otpimg} />
      </div>
  )
}