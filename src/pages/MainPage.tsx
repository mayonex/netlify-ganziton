import { useEffect, useState } from "react";
import Header from "../components/Header";
import MainCard from "../components/MainCard";

export default function MainPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("public/data/place-card.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main className="min-w-full min-h-screen flex-row px-20 lg:px-60">
        <section className="min-w-full min-h-max py-32">
          <div className="text-3xl font-bold">
            <h1>가게 휴무일, 영업시간 전에</h1>
            <h1 className="mt-5">미리 사업 해보세요!</h1>
          </div>
          <div className="mt-20 relative flex justify-center items-center">
            <h1 className="absolute top-[calc(50%-100px)] left-[calc(50%-160px)] text-5xl font-bold text-[#11434A]">
              Open
            </h1>
            <h1 className="absolute top-[calc(50%+50px)] left-[calc(50%+60px)] text-5xl font-bold text-[#DE6655]">
              Close
            </h1>
            <img
              className="main-logo-rotate-animation"
              src="src/img/main-logo.png"
              alt="메인 로고"
            />
          </div>
        </section>
        <section className="min-w-full min-h-max py-32">
          <div className="flex flex-col items-center ">
            <h1 className="text-3xl font-bold">서울 핫플 5개에 위치한</h1>
            <h1 className="text-3xl font-bold mt-8">
              공유공간을 대여해보세요!
            </h1>
          </div>
          <ul className="mt-60 flex justify-between ">
            {data &&
              data.map((item: any) => (
                <MainCard
                  key={item.key}
                  src={item.src}
                  location={item.location}
                  category={item.category}
                  title={item.title}
                  subTitle={item.subTitle}
                  price={item.price}
                />
              ))}
          </ul>
        </section>
      </main>
    </div>
  );
}
