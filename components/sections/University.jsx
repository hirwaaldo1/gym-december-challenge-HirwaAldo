import Image from "next/image";
import Wrapper from "../layout/Wrapper";
import people from "../../data/people";
export default function University() {
  return (
    <Wrapper>
      <div className="mt-24">
        <div className="grid grid-cols-3 grid-rows-2 w-full gap-x-[9rem] gap-y-[2.5rem] ">
          <div className="col-span-2  row-span-2 text-primary cursor-pointer hover:text-primary-100">
            <Image
              src="/assets/images/csm_20210920_Praesident_Podcast_AH_653886_414588d4e9.webp"
              alt=""
              className="w-full"
              width={730.24}
              height={256}
            />
            <p className="text-2xl font-bold leading-1.25 tracking-[0.0125rem]  mt-6">
              We are TUM – the podcast of our university
            </p>
            <p className="mt-4 tracking-[0.0125rem] font-medium  text-lg mb-4 ">
              In our podcast series, we regularly talk to the people who make up
              our university: From top researchers, students and faculty to the
              {`"hidden champions"`} behind the scenes.
            </p>
            <button className="uppercase border border-primary-100  font-bold  py-4 px-5 my-6 ">
              All episodes
            </button>
          </div>
          <div className="col-span-1 row-span-2  text-primary hover:text-primary-100 mt-6 cursor-pointer">
            <Image
              src="/assets/images/csm_2202_OM_Campus_NeueBerufsbegleitendeZertifikatsprogrammeLLL_pexels-fauxels-3184299_c055900808.webp"
              alt=""
              className="w-full h-[300px]"
              width={293.12}
              height={256}
            />
            <p className="text-2xl font-bold leading-1.25 tracking-[0.0125rem]  mt-6">
              We are TUM – the podcast of our university
            </p>
            <p className="mt-7 tracking-[0.0125rem] font-medium  text-lg mb-4 ">
              In our podcast series, we regularly talk to the people who make up
              our university: From top researchers, students and faculty to the
              {`"hidden champions"`} behind the scenes.
            </p>
            <button className="uppercase border border-primary-100  font-bold w-full  py-4 px-5 my-6 ">
              TUM Institute for LifeLong <br /> Learning
            </button>
          </div>
        </div>
      </div>
      <div className="mt-12">
        <div className="grid grid-cols-3  gap-x-[9rem] gap-y-[2.5rem] ">
          {people.map((v, k) => {
            return (
              <div
                key={k}
                className="text-primary cursor-pointer hover:text-primary-100"
              >
                <Image
                  src={v.img}
                  alt=""
                  className="h-[22.25rem] object-cover w-full"
                  width={293.12}
                  height={256}
                />
                <p className="text-2xl font-bold leading-1.25 tracking-[0.0125rem]  mt-6">
                  {v.name}
                </p>
                <p className="mt-4 tracking-[0.0125rem] font-medium  text-lg mb-4 ">
                  {v.desc}
                </p>
                <button className="uppercase border border-primary-100  font-bold  py-4 px-5 my-6 ">
                  {v.button}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
}
