import ArrowLeft from "../../assets/svg/ArrowLeft";
import CommunicationIcon from "../../assets/svg/CommunicationIcon";
import { useNavigate, useLocation } from "react-router-dom";
import ChipWrap from "../../components/category/ChipWrap";
import BaisicButton from "../../components/button/BaisicButton";
import BasicCalendar from "../../components/BasicCalendar";
import { useCallback, useEffect, useState } from "react";
import { getPlaceApi } from "../../assets/api/place";
import { PlaceInfoType } from "../../assets/type";

const PlaceDetailPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [place, setPlace] = useState<PlaceInfoType | null>(null);

  const getPlaceData = useCallback(async () => {
    const response = await getPlaceApi(Number(location.pathname.split("/")[2]));

    if (response.status === 200) {
      setPlace(response);
    }
  }, [location]);

  useEffect(() => {
    getPlaceData();
  }, []);
  console.log(location, place);

  return (
    <article className={``}>
      {place && (
        <>
          <section
            className={`flex w-full text-my-green justify-between items-center basic-border-bottom px-3 pb-5`}
          >
            <div
              className={`flex gap-2 items-center cursor-pointer`}
              onClick={() => navigate("/place/list")}
            >
              <ArrowLeft />
              <div className={`font-bold text-3xl`}>{place.placeName}</div>
            </div>
            <div className={`flex gap-2 items-center`}>
              <CommunicationIcon />
              <div className={`font-bold text-xl`}>{place.placeName}</div>
            </div>
          </section>
          <section className={`flex gap-9 py-[4rem] px-7 basic-border-bottom`}>
            <div className={`flex flex-col w-fit gap-6`}>
              <div
                className={`felx flex-grow h-[27.5rem] rounded-2xl bg-gray-300`}
              ></div>
              <div className={`flex gap-4`}>
                {[0, 1, 2, 3].map((imgIndex) => (
                  <div className={`w-32 h-32  rounded-2xl bg-gray-300`}>
                    {place.placeImageUrl[imgIndex]
                      ? place.placeImageUrl[imgIndex]
                      : "ㅎㅎ"}
                  </div>
                ))}
              </div>
            </div>

            <div className={`flex flex-col flex-grow gap-8`}>
              <div
                className={`rounded-xl w-full h-[11rem] p-4`}
                style={{ boxShadow: "0px 0px 12px 0px rgba(0, 0, 0, 0.25)" }}
              >
                {place.article}
              </div>
              <div className={`flex items-center gap-[2.75rem]`}>
                <div className={`font-bold text-2xl`}>업종</div>
                <ChipWrap
                  filteringList={[place.business]}
                  type={"business"}
                  allPicked={true}
                ></ChipWrap>
              </div>
              <div className={`flex items-center gap-[2.75rem]`}>
                <div className={`font-bold text-2xl`}>지역</div>
                <ChipWrap
                  filteringList={[place.location]}
                  type={"location"}
                  allPicked={true}
                ></ChipWrap>
              </div>
              <div className={`w-full flex justify-between`}>
                <div className={`font-bold text-2xl`}>월 임대료</div>
                <div className={`flex gap-2 items-baseline pt-8`}>
                  <span className={`text-xl`}>월</span>
                  <span className={`font-bold text-2xl`}>{place.cost}</span>
                  <span className={`text-xl`}>원</span>
                </div>
              </div>
              <div className={`flex justify-end`}>
                <BaisicButton
                  content={"사업 계획서 제출하기"}
                  color={"red"}
                  type={"button"}
                  onClickEvent={() => console.log("page 이동")}
                ></BaisicButton>
              </div>
            </div>
          </section>
          <section
            className={`flex flex-col justify-center items-center px-3 py-5`}
          >
            <div className={`flex w-full font-semibold text-3xl text-my-green`}>
              계약 가능한 일정
            </div>
            <BasicCalendar disabledDates={[]}></BasicCalendar>
          </section>
        </>
      )}
    </article>
  );
};

export default PlaceDetailPage;
