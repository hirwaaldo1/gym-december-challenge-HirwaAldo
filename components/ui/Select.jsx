import Image from "next/image";
import Wrapper from "../layout/Wrapper";

export default function Select() {
  return (
    <Wrapper>
      <select
        name="program"
        id="program"
        className="w-full bg-grey-400 outline-none border-b border-b-primary-50 text-grey-500 text-2xl font-bold  mt-12 p-5"
      >
        {[
          "Aerospace - Bachelor of Science (B.Sc.)",
          "Aerospace - Master of Science (M.Sc.)",
          "Aerospace Engineering - Master of Science (M.Sc.)",
          "Agricultural Biosciences - Master of Science (M.Sc.)",
          "Agricultural and Horticultural Sciences - Bachelor of Science (B.Sc.)",
          "Agrosystem Sciences - Master of Science (M.Sc.)",
        ].map((v, k) => {
          return (
            <option key={k} value={v}>
              {v}
            </option>
          );
        })}
      </select>
      <div className="flex ml-auto w-fit mt-5">
        <p className="text-base leading-1.625 font-bold text-primary-50 ">
          Degree programs
        </p>
        <Image
          src="/assets/icons/mZPTXlMzm9sao.svg"
          width={24}
          className="invert"
          height={24}
          alt=""
        />
      </div>
    </Wrapper>
  );
}
