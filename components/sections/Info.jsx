import Image from "next/image";
import Wrapper from "../layout/Wrapper";

export default function Info({
  img,
  colors,
  right,
  title,
  desc,
  button,
  icons,
  textColor,
}) {
  let buttonColor =
    button === "Organization"
      ? "uppercase bg-primary-100 font-bold text-white py-4 px-5 my-6"
      : "uppercase bg-white text-primary-100 font-bold py-4 px-5 my-6";
  return (
    <Wrapper>
      <div className="flex relative flex-wrap xl:flex-nowrap mt-24">
        <div className="flex-grow ">
          <Image src={img} alt="" width={784} height={479.2} />
        </div>
        <div
          style={{ backgroundColor: colors, color: textColor }}
          className="  w-11/12 relative  -top-10  xl:absolute  right-0 xl:inset-y-1/2 xl:w-[688px] h-fit m-auto  p-10"
        >
          <h1 className="text-1.75 leading-1.2 font-bold mb-5">{title}</h1>
          <p>{desc}</p>
          <button className={buttonColor}>{button}</button>
        </div>
      </div>
    </Wrapper>
  );
}
