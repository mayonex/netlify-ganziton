import React from "react";
import { mainImg, userImg } from "../../assets/images";
import MainCard from "../MainCard";

export default function MyCards({ placeList }) {
  const maxItemsToShow = 6;

  const getGridDimensions = () => {
    const itemsToShow = Math.min(placeList.length, maxItemsToShow);
    const rows = Math.ceil(itemsToShow / 3);
    const cols = 3;
    return { rows, cols };
  };

  let emptyList;
  if (placeList.length > 3) {
    emptyList = Array(Math.max(maxItemsToShow - placeList.length, 0)).fill(0);
  } else {
    emptyList = Array(Math.max(3 - placeList.length, 0)).fill(0);
  }

  const { rows, cols } = getGridDimensions();

  return (
    <div className={`grid grid-rows-${rows} grid-cols-${cols}  gap-2`}>
      {placeList.map((item) => (
        <MainCard
          key={item.id}
          src={mainImg.place1}
          location={item.location}
          category={item.business}
          title={item.placeName}
          subTitle={item.article}
          price={item.cost}
          isBasicMode={true}
          size={"my-2 px-0 ml-1"}
        />
      ))}
      {emptyList.map((_, index) => (
        <div className="" key={index}>
          <img
            className="h-[400px]"
            src={userImg.storeEmpty}
            alt="Placeholder"
          />
        </div>
      ))}
    </div>
  );
}
