import React from 'react'
import Image from "next/image";
import Carousel1 from "/public/carousel1.png";
import Carousel2 from "/public/carousel2.png";
import Carousel3 from "/public/carousel3.png";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

type Props = {}

export default function Carousell({}: Props) {
  return (
    <div className="lg:flex lg:ml-72 lg:p-10 lg:mr-12 lg:m-4 my-4 mx-4">
      <Carousel autoPlay>
        <div>
          <Image src={Carousel1} />
        </div>
        <div>
          <Image src={Carousel2} />
        </div>
        <div >
          <Image src={Carousel3} />
        </div>
      </Carousel>
    </div>
  )
}