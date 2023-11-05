import { useState } from "react";
import FilteringSection from "../../components/category/FilteringSection";
import BaisicButton from "../../components/button/BaisicButton";

const PlaceListPage = () => {
  const [filterBusinessList, setFilterBusinessList] = useState<string[]>([]);
  const [filterLocationList, setFilterLocationList] = useState<string[]>([]);
  // const [placeList, setPlaceList] = useState([]);
  filterBusinessList;
  filterLocationList;

  return (
    <article className={`flex justify-center flex-col items-center`}>
      <section
        className={`w-full flex flex-col items-center gap-4 basic-boder-bottom p-[1.8125rem]`}
      >
        <div className={`font-bold text-[2.5rem]`}>공유 공간 찾기</div>
        <div>조건에 맞는 공유공간을 확인할 수 있습니다.</div>
      </section>
      <section
        className={`w-full flex flex-col gap-9 items-center p-[1.4375rem] basic-boder-bottom`}
      >
        <div className={`flex flex-col gap-[3.75rem]`}>
          <FilteringSection
            type={"business"}
            onClickEvent={(list) => {
              setFilterBusinessList(list);
            }}
          />
          <FilteringSection
            type={"location"}
            onClickEvent={(list) => {
              setFilterLocationList(list);
            }}
          />
        </div>
        <BaisicButton
          content={"조건 검색"}
          color={"green"}
          type={"button"}
          onClickEvent={() => console.log("hi")}
        ></BaisicButton>
      </section>
      <section>list</section>
    </article>
  );
};

export default PlaceListPage;
