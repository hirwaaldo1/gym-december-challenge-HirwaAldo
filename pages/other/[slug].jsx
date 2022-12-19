import Link from "next/link";
import { useRouter } from "next/router";
import Header from "../../components/layout/Header";
import Wrapper from "../../components/layout/Wrapper";

export default function Slug() {
  const router = useRouter();
  return (
    <div>
      <Header />
      <div className="pt-32">
        <Wrapper>
          <div className="bg-[#EFEDFC] text-center p-5 mt-36 mb-16">
            <p className="text-3xl font-bold leading-1.25 tracking-[0.0125rem] mt-6">
              {router.query.slug}
            </p>
            <p className="mt-4 tracking-[0.0125rem]  text-lg mb-4 ">
              this is another page
            </p>
            <Link href={"/"}>
              <button className="uppercase bg-primary-100 font-bold text-white py-4 px-5 my-6">
                Home
              </button>
            </Link>
          </div>
        </Wrapper>
      </div>
    </div>
  );
}
