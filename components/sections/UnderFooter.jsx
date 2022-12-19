import Image from "next/image";
import Wrapper from "../layout/Wrapper";

export default function UnderFooter() {
  return (
    <div className="bg-[#072140] text-white py-6">
      <Wrapper>
        <div className="flex justify-between">
          <div className="flex gap-5 my-auto">
            {[
              "Jobs",
              "Feedback",
              "Press and Media",
              "Accessibility",
              "Privacy Policy",
              "Legal Notice",
            ].map((v, k) => {
              return <p key={k}>{v}</p>;
            })}
          </div>
          <Image src="/assets/images/22.png" alt="" width="250" height="250" />
        </div>
        <div className="my-5 flex gap-5">
          <div>
            <Image
              src="/assets/icons/partners-of-excellence.svg"
              alt=""
              width={42}
              height={59.513}
            />
          </div>
          <div className="text-xs ">
            <p className="mb-5 font-medium">TUM Partners of Excellence</p>
            <p>
              Airbus · Altana · Audi · Bayerischer Bauindustrieverband · BMW ·
              Bosch · Busch Vacuum · Clariant · Dräxlmaier · Evonik Industries ·
              Google · Herrenknecht · HUAWEI · Infineon · Linde · MAN · Nestlé ·
              Rohde & Schwarz · RWE · SAP · SGL Carbon · Siemens · TRUMPF ·
              TÜV-Süd · Vereinigung der Bayerischen Wirtschaft · Volkswagen ·
              Wacker Chemie
            </p>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
