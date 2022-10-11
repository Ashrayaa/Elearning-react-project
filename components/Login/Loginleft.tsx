import React from 'react'
import Login from "/public/loginimage.png";
import Image from "next/image";

type Props = {}

export default function Loginleft({}: Props) {
  return (
    <div className=" lg:w-12/12 lg:h-screen lg:m-0 lg:pt-32 lg:p-32 flex flex-col justify-center p-16 bg-[#F4BA58] ">
    <Image src={Login} />
  </div>
  )
}