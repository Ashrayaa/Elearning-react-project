import Image from "next/image";
import React from "react";
import Login from "/public/loginimage.png";
import Head from "next/head";
import Loginform from "../components/Login/Loginform";
import Loginleft from "../components/Login/Loginleft";

type Props = {}

export default function login({}: Props) {
  return (
    <div className="grid grid-row-2 md:grid-cols-2 h-screen">
    <Head>
      <title>Login</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/login.png" />
     
    </Head>
    <Loginleft />

    <Loginform />
  </div>
  )
}