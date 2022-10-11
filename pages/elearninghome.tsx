import React from "react";
import Header from "../components/Header";
import Carousell from "../components/Carousell";
import Videoclass from "../components/Videoclass"
import Liveclass from "../components/Liveclass";

type Props = {};

export default function elearninghome({}: Props) {
  return (
    <div>
      <Header />
      <Carousell />
      <Videoclass />
      <Liveclass/>
    </div>
  );
}

