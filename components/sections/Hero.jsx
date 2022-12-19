import Image from "next/image";
import React from "react";
import Wrapper from "../layout/Wrapper";

export default function Hero() {
  return (
    <section className=" ">
      <div className="relative h-[48.75rem] ">
        <div className="pt-36 text-white z-40">
          <Wrapper>
            <div className="relative">
              <h1 className="text-5xl font-bold leading-[1.1]">
                TUM. The Entrepreneurial <br />
                University
              </h1>
              <p className="text-lg leading-[1.5] mt-6 tracking-wider">
                Innovation through talent, excellence and responsibility
              </p>
            </div>
          </Wrapper>
        </div>
        <button className="absolute bottom-6 right-12 bg-primary-50 p-2.5">
          <Image
            src="/assets/icons/play.svg"
            alt=""
            className="invert"
            width={24}
            height={24}
          />
        </button>
        <div className="bg-gradient-to-r -z-10 from-grey-100 w-full to-transparent absolute h-[48.75rem] top-0"></div>
        <video
          className="absolute h-[48.75rem] w-full  top-0 object-cover  -z-20"
          src="/assets/video/tum_startseite_header_010922.mp4"
          loop
          muted
          autoPlay
          controls=""
        ></video>
      </div>
    </section>
  );
}
