import Wrapper from "../layout/Wrapper";

export default function Customer() {
  return (
    <Wrapper>
      <div className="mt-24">
        <h2 className="text-2.1 font-bold text-primary">TUM in numbers</h2>
        <div className="grid grid-cols-5 grid-rows-2 gap-6 w-full text-white mt-12">
          <div className="col-span-3 row-span-2 bg-primary-100 p-10">
            <h1 className="text-8.125 leading-0.76 font-bold">50,000</h1>
            <p className="text-2.1 font-bold text-white">Students</p>
          </div>
          <div className="col-span-2 row-span-1 bg-[#F7B11E] p-5 text-primary">
            <div className="grid grid-cols-2 justify-between">
              <div className="text-5.625 leading-0.76 font-bold">176</div>
              <div className="text-2xl font-bold leading-1.3 h-fit mt-auto">
                ERC Grants for cutting-
                <br />
                edge research
              </div>
            </div>
          </div>
          <div className="col-span-2 row-span-1 bg-[#B55CA5] p-5 text-primary">
            <div className="grid grid-cols-2">
              <div className="text-5.625 leading-0.76 font-bold">18</div>
              <div className="text-2xl font-bold leading-1.3 h-fit mt-auto">
                Nobel laureates
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
