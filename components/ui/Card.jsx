import Image from "next/image";
import React from "react";

export default function Card({ type, name, title, desc, date, time, img }) {
  return (
    <div>
      <div className="text-primary cursor-pointer hover:text-primary-100">
        <div className="relative ">
          <Image src={img} alt="" width={465} height={280} />
          <div className="absolute bottom-0 py-0.12 bg-grey-300 px-2">
            {type}
          </div>
        </div>
        <h4 className="text-base leading-1.625 font-bold mt-3">{name}</h4>
        <h3 className="text-lg  font-bold leading-1.3">{title}</h3>
        <p className="mt-3 text-0.87 leading-1.5 font-medium ">{desc}</p>
        <div className="flex justify-between mt-4">
          <p className="text-sm font-medium">{date}</p>
          <p className="text-sm font-medium">{time}</p>
        </div>
      </div>
    </div>
  );
}
