import Image from "next/image";
import Wrapper from "../layout/Wrapper";

export default function Story() {
  return (
    <Wrapper>
      <div className="hidden sm:flex flex-col-reverse xl:flex xl:flex-nowrap flex-wrap  relative mt-24">
        <div className=" bg-[#EA7237]  text-primary  -translate-y-10 xl:translate-y-0   xl:absolute left-0 inset-y-1/2 w-[688px] h-fit m-auto  p-10">
          <h1 className="text-1.75 leading-1.2 font-bold mb-5">
            {"Here I have met a lot of people who are breaking new ground"}
          </h1>
          <p>Philip Häusser, alumnus</p>
          <button
            className={
              "uppercase bg-primary-100 font-bold text-white py-4 px-5 my-6"
            }
          >
            Read the alumni story
          </button>
        </div>
        <div className=" ml-auto w-fit">
          <Image
            src={
              "/assets/images/csm_Dr_Philip_Haeusser-Credit_Christian_Kaufmann-5_d9de9a5b3b.webp"
            }
            alt=""
            width={784}
            height={479.2}
          />
        </div>
      </div>
    </Wrapper>
  );
}
