import Image from "next/image";
import Tag from "../ui/Tag";
import Wrapper from "./Wrapper";

export default function Footer() {
  return (
    <footer className="bg-[#0A2D57] py-12 text-white ">
      <Wrapper>
        <div className="grid grid-cols-3">
          <div className="flex gap-6">
            <div className="">
              <Image
                src="/assets/icons/tum-logo.svg"
                alt=""
                width={52.29}
                height={145}
              />
            </div>
            <div>
              <p className="text-sm xl:text-xl">
                Technical University of Munich <br /> Arcisstraße 21 <br />{" "}
                80333 München
              </p>
              <p className="text-sm xl:text-xl mt-6">
                {"Phone: +49 (0)89-289-01"}
              </p>
              <p className="text-sm xl:text-xl ">
                {"Fax: +49 (0)89-289-22000"}
              </p>
            </div>
          </div>
          <div>
            <p className="text-sm xl:text-xl font-medium">
              {"Let's shape the future together."}
            </p>
            <Tag value="Support us"></Tag>
          </div>
          <div>
            <p className="text-sm xl:text-xl font-medium">{"Latest news"}</p>
            <div className="flex my-2 gap-2">
              <div>
                <Image
                  src="/assets/icons/white.svg"
                  width={24}
                  height={24}
                  className={"w-[24px] h-[24px]"}
                  alt=""
                />
              </div>
              <p className="text-sm xl:text-xl">
                {"Germany's strongest university in business sciences"}
              </p>
            </div>
            <div className="flex my-2 gap-2">
              <div>
                <Image
                  src="/assets/icons/white.svg"
                  width={24}
                  height={24}
                  className={"w-[24px] h-[24px]"}
                  alt=""
                />
              </div>
              <p className="text-sm xl:text-xl">
                {"TUM partners with Nobel Sustainability Trust"}
              </p>
            </div>
            <div className="flex my-2 gap-2">
              <div>
                <Image
                  src="/assets/icons/white.svg"
                  width={24}
                  height={24}
                  className={"w-[24px] h-[24px]"}
                  alt=""
                />
              </div>
              <p className="text-sm xl:text-xl">
                {
                  "Antihelium nuclei as messengers from the depths of the galaxy"
                }
              </p>
            </div>
          </div>
        </div>
        <hr className="mt-12" />
        <div className="flex xl:flex-nowrap flex-wrap mt-6 gap-12">
          <div className="">
            <p className=" text-lg xl:text-xl xl:hidden block font-medium">
              Schools and Departments:
            </p>
            <p className=" text-lg xl:text-xl xl:block hidden font-medium">
              Schools <br /> and <br /> Departments:
            </p>
          </div>
          <div className="flex gap-3 flex-wrap">
            {[
              "Computation, Information and Technology",
              "Engineering and Design",
              "Natural Sciences ",
              "Life Sciences ",
              "Management ",
              "Social Sciences and Technology ",
              "Medicine",
              "Sport and Health Sciences ",
            ].map((v, k) => {
              return <Tag key={k} value={v}></Tag>;
            })}
          </div>
        </div>
        <div className="flex xl:flex-nowrap flex-wrap mt-6 gap-12">
          <div className="">
            <p className=" text-lg xl:text-xl font-medium">Quicklinks:</p>
          </div>
          <div className="flex gap-3 flex-wrap">
            {[
              "Persons (TUMonline) ",
              "IT Services",
              "Calendar ",
              "MyTUM ",
              "Rooms (TUMonline) ",
              "University Library",
              "TUMshop ",
            ].map((v, k) => {
              return <Tag key={k} value={v}></Tag>;
            })}
          </div>
        </div>
      </Wrapper>
    </footer>
  );
}
