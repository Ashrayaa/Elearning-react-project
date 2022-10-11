import Image from "next/image";
import React from "react";
import otpimg from "/public/girl.png";
import Head from "next/head";
import Verifyotpform from "../components/Otp/Verifyotpform"
import Otpleft from "../components/Otp/Otpleft";

type Props = {}

export default function otp({}: Props) {
  return (
    <div className="grid grid-row-2 md:grid-cols-2 h-screen">
    <Head>
      <title>Verify OTP</title>
      <meta name="description" content="Verify OTP" />
      <link rel="icon" href="" />
      <link
        href="//fonts.googleapis.com/css?family=Montserrat:thin,extra-light,light,100,200,300,400,500,600,700,800"
        rel="stylesheet"
        type="text/css"
      ></link>
    </Head>

    {/* the left side */}
  <Otpleft/>

    {/* the right side */}

   <Verifyotpform />
  </div>
  )
}