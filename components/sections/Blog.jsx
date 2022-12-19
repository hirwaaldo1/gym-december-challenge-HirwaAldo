import Card from "../ui/Card";
import Wrapper from "../layout/Wrapper";
import news from "../../data/news";
export default function Blog() {
  return (
    <Wrapper>
      <div className="w-1/2 m-auto mt-12 relative left-32">
        <div className="grid grid-cols-2 gap-6">
          {news.slice(2, 4).map((v, k) => {
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
  );
}
