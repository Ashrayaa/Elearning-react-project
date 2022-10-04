import React from 'react'
import Frame from "/public/frame.png"
import Image from "next/image";

type Props = {}

export default function 
({}: Props) {
  return (
    <div className="lg:ml-80 ">
    <h2 className="text-xl ml-8 font-semibold lg:text-3xl">
      <span className="text-[#00C285]">Learn</span>{" "}
      with Live Classes
    </h2>
    <div className='lg:flex lg:flex-row lg:gap-8 lg:py-12 flex flex-col gap-6 p-4 lg:mr-12'>
        <Image src={Frame}/>
        <Image src={Frame}/>
    </div>

  </div>
  )
}