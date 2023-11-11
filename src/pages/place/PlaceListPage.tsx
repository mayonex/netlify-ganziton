import { useCallback, useEffect, useState } from "react";
import FilteringSection from "../../components/category/FilteringSection";
import BaisicButton from "../../components/button/BaisicButton";
import { getPlaceListApi } from "../../assets/api/place";
import MainCard from "../../components/MainCard";
import { PlaceInfoType } from "../../assets/type";
import { useNavigate } from "react-router-dom";

const PlaceListPage = () => {
  const navigate = useNavigate();
  const [filterBusinessList, setFilterBusinessList] = useState<string[]>([]);
  const [filterLocationList, setFilterLocationList] = useState<string[]>([]);
  const [placeList, setPlaceList] = useState<PlaceInfoType[]>([]);

  const getPlaceList = useCallback(async () => {
    const response = await getPlaceListApi(
      filterBusinessList.length === 0 ? "total" : filterBusinessList.join(),
      filterLocationList.length === 0 ? "total" : filterLocationList.join()
    );
    console.log(response, response.status);
    if (response.status === 200) {
      setPlaceList(response);
    }

    setPlaceList([
      {
        id: 1,
        placeName: "성수1-요식업1",
        placeImageUrl: "default",
        business: "요식업",
        location: "성수",
        article: "설명글1",
        cost: 100000,
      },
      {
        id: 2,
        placeName: "성수1-요식업1",
        placeImageUrl: "default",
        business: "요식업",
        location: "성수",
        article: "설명글1",
        cost: 100000,
      },
    ]);
  }, [filterBusinessList, filterLocationList]);

  useEffect(() => {
    getPlaceList();
  }, []);

  return (
    <article className={`flex justify-center flex-col items-center`}>
      <section
        className={`w-full flex flex-col items-center gap-4 basic-border-bottom p-[1.8125rem]`}
      >
        <div className={`font-bold text-[2.5rem]`}>공유 공간 찾기</div>
        <div>조건에 맞는 공유공간을 확인할 수 있습니다.</div>
      </section>
      <section
        className={`w-full flex flex-col gap-9 items-center p-[1.4375rem] basic-border-bottom`}
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
          onClickEvent={() => getPlaceList()}
        ></BaisicButton>
      </section>
      <section className={`w-full py-[4rem] grid grid-cols-3`}>
        {placeList.map((place) => (
          <div
            className={`px-4`}
            onClick={() => navigate(`/place/${place.id}`)}
          >
            <MainCard
              key={place.id}
              location={place.location}
              category={place.business}
              title={place.placeName}
              subTitle={place.article}
              price={place.cost}
              size=""
              src={place.placeImageUrl}
              isBasicMode={true}
            ></MainCard>
          </div>
        ))}
      </section>
    </article>
  );
};

export default PlaceListPage;
