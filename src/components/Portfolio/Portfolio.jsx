import React from "react";
import image from "./images/image.webp";
import logitech from "./images/logitech.webp";
import motionarray from "./images/motionarray.webp";
import msi from "./images/msi.webp";
import penstore from "./images/penstore.webp";
import trufru from "./images/trufru.webp";
import wildthingz from "./images/wildthingz.webp";
import SectionHeading from "../Constants/SectionHeading";
export default function Portfolio() {
  return (
    <div id="Portfolio">
      <div
        className="flex justify-center text-project-black-first relative bg-cover bg-center py-20"
        style={{ backgroundImage: `url(${image})` }}
      >
        <SectionHeading title="PORTFOLIO" />
      </div>
      <div className="bg-project-dark-gray-first flex justify-center h-25">
        <div className="w-40 border-b flex justify-center h-5 py-10">
          <a href="">ALL</a>
        </div>
      </div>
      <div className="flex flex-wrap *:cursor-pointer">
        <a className="hidden md:block w-1/3 h-1/2 overflow-hidden" href="https://github.com/hamedmoradidev/msi"><img className="filter brightness-50" src={msi} alt="" /></a>
        <a className="w-full md:w-1/3 h-1/2 overflow-hidden" href="https://github.com/hamedmoradidev/trufru"><img className="filter brightness-50" src={trufru} alt="" /></a>
        <a className="w-full md:w-1/3 h-1/2 overflow-hidden" href="https://github.com/hamedmoradidev/wildthingz"><img className="filter brightness-50" src={wildthingz} alt="" /></a>
        <a className="hidden md:block w-1/3 h-1/2 overflow-hidden" href="https://github.com/hamedmoradidev/logitech"><img className="filter brightness-50" src={logitech} alt="" /></a>
        <a className="hidden md:block w-1/3 h-1/2 overflow-hidden" href="https://github.com/hamedmoradidev/penstore"><img className="filter brightness-50" src={penstore} alt="" /></a>
        <a className="w-full md:w-1/3 h-1/2 overflow-hidden" href="https://github.com/hamedmoradidev/motionarray"><img className="filter brightness-50" src={motionarray} alt="" /></a>
      </div>
      <div className="bg-project-dark-gray-first flex justify-center items-center">
        <p className="text-[20px] my-5 font-semibold">And many more to come!</p>
      </div>
    </div>
  );
}
