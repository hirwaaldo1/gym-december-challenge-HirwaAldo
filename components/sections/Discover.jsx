import Image from "next/image";
import Wrapper from "../layout/Wrapper";

export default function Discover() {
  return (
    <section className="mt-12 ">
      <Wrapper>
        <p className="text-base  font-bold text-primary">
          Customized navigation
        </p>
        <h3 className="text-2.1  font-bold text-primary">
          Discover what TUM has to offer
        </h3>
        <div className="relative mt-12">
          <div className="absolute top-8">
            <div className="border p-2 min-w-260.25 bg-white">
              <p className="px-5 py-3">For:</p>
              <div>
                {["Prospective Students", "Founders", "Employees", ""].map(
                  (v, k) => {
                    return (
                      <div key={k}>
                        <button className="px-5 py-3 w-full text-left text-primary-100 font-bold text-lg hover:bg-grey-400 hover:text-primary">
                          {v}
                        </button>
                      </div>
                    );
                  }
                )}
              </div>
              <hr className="mb-1" />
              <button className="px-5 py-3 w-full text-left text-primary-100 font-bold text-lg hover:bg-grey-400 hover:text-primary">
                Show All
              </button>
            </div>
          </div>
          <div className="w-10/12 ml-auto">
            <div className="flex gap-14">
              <div className="">
                <Image
                  src="/assets/images/1.webp"
                  alt=""
                  width={666.068}
                  height={434.375}
                />
              </div>
              <div className="flex-1 my-auto">
                <h1 className="text-2.625 font-bold text-primary ">
                  Employees
                </h1>
                <p className="text-lg mt-6 tracking-0.12">
                  We create an inspiring environment in which our 10,000 staff
                  can develop as individuals and further their motivation and
                  talents in all their diversity {"-"} in research and teaching,
                  research management, administration and technical services.
                </p>
                <button className="uppercase bg-primary-100 text-white py-4 px-5 my-6">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
