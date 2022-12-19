import Image from "next/image";

export default function Tag({ value }) {
  return (
    <div className="flex text-[18px] gap-3 ">
      <div className="hover:underline my-auto">{value} </div>
      <Image src={"/assets/icons/tag.svg"} alt="" width={25} height={25} />
    </div>
  );
}
