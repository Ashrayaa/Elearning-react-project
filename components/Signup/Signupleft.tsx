import React from "react";
import Image from "next/image";
import Login from "/public/loginimage.png";

type Props = {};

export default function Signupleft({}: Props) {
  return (
    <div className="flex flex-col justify-center p-16 bg-[#00C285]">
      <Image className="sm:object-contain" src={Login} />
    </div>
  );
}
