import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-primary text-white fixed w-full z-50">
      <nav className="max-w-8xl mx-auto px-6">
        <div className="flex justify-between">
          <div className="flex py-5">
            <Image
              src="/assets/icons/menu.svg"
              className="invert mr-4"
              alt=""
              width={33}
              height={33}
            />
            <div className="flex gap-3">
              <Image
                src="/assets/icons/tum-logo.svg"
                alt=""
                width={80}
                height={42}
              />
              <span className="font-normal text-xs leading-1.6 tracking-0.12">
                Technical
                <br /> University <br /> of Munich
              </span>
            </div>
          </div>
          <div className=" my-auto flex  ">
            <div className="gap-6 mr-[3.375rem] pt-[5px] hidden  xl:flex">
              {/* mt-[0.875rem] */}
              {[
                "News and Events",
                "Studies",
                "Lifelong learning",
                "Research",
                "Innovation",
                "Community",
                "About TUM",
              ].map((v, k) => {
                return (
                  <Link
                    key={k}
                    href={`/other/${v}`}
                    className="uppercase text-[0.875rem]  py-6  font-bold leading-[1.1428571429] border-b-4 border-b-primary  hover:border-b-white h-full cursor-pointer "
                  >
                    {v}
                  </Link>
                );
              })}
            </div>
            <div className="flex my-auto">
              <span className="text-grey-50 font-semibold py-0.5   hover:text-white">
                DE
              </span>
              <span className="border-l-2 mx-2 px-2 py-0.5  font-semibold">
                EN
              </span>
            </div>
            <div className="my-auto mx-3">
              <Image
                src="/assets/icons/seacher.svg"
                className="invert "
                alt=""
                width={24}
                height={24}
              />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
