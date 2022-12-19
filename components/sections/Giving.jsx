import React from "react";
import Wrapper from "../layout/Wrapper";

export default function Giving() {
  return (
    <Wrapper>
      <div className="bg-[#EFEDFC] text-center p-5 mt-36 mb-16">
        <p className="text-3xl font-bold leading-1.25 tracking-[0.0125rem] mt-6">
          Giving
        </p>
        <p className="mt-4 tracking-[0.0125rem]  text-lg mb-4 ">
          Support research, innovation and teaching at one of the best technical
          universities in Europe. Show social responsibility and help nurture
          talent.
        </p>
        <button className="uppercase bg-primary-100 font-bold text-white py-4 px-5 my-6">
          Support us
        </button>
      </div>
    </Wrapper>
  );
}
