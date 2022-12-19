import Wrapper from "../layout/Wrapper";
import Card from "../ui/Card";
import news from "../../data/news";
export default function News() {
  return (
    <section>
      <Wrapper>
        <div className="grid grid-cols-2 pt-12">
          <div className="">
            <h3 className="text-2.1 leading-1.2 font-bold">News from TUM</h3>
            <p className="text-xl text-primary mt-6">
              News, research results and events: everything that enthuses people
              at our university.
            </p>
            <button className="uppercase bg-primary-100 text-white py-4 px-5 my-6">
              see all
            </button>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {news.slice(0, 2).map((v, k) => {
              return (
                <Card
                  key={k}
                  type={v.type}
                  name={v.name}
                  title={v.title}
                  desc={v.desc}
                  date={v.date}
                  time={v.time}
                  img={v.img}
                />
              );
            })}
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
