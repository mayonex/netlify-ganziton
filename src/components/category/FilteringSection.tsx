import ChipWrap from "./ChipWrap";

interface props {
  type: "business" | "location";
  onClickEvent: (pickedList: string[]) => void;
}

const businessList = ["전체", "요식업", "주점", "제조업", "도소매"];
const locationList = ["전체", "성수", "홍대", "강남", "종로", "신촌"];

const FilteringSection = ({ type, onClickEvent }: props) => {
  const filteringList = type === "business" ? businessList : locationList;
  return (
    <section className={`flex flex-col items-center`}>
      <div className={`flex flex-col items-center gap-[1.9375rem]`}>
        <div
          className={`font-semibold text-lg ${
            type === "business" ? "text-my-red" : "text-my-green"
          }`}
        >
          {type === "business" ? "업종" : "사업장 위치"}
        </div>
        <ChipWrap
          filteringList={filteringList}
          type={type}
          pickEvent={onClickEvent}
        ></ChipWrap>
      </div>
    </section>
  );
};

export default FilteringSection;
