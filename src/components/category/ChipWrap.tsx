import { useEffect, useState } from "react";
import Chip from "./Chip";

interface props {
  filteringList: string[];
  type: "business" | "location";
  pickEvent: (pickedList: string[]) => void;
}

const ChipWrap = ({ filteringList, type, pickEvent }: props) => {
  const [picked, setPicked] = useState<string[]>(["전체"]);

  const clickChipEvent = (currentChip: string) => {
    const _picked = JSON.parse(JSON.stringify(picked));

    if (currentChip === "전체") {
      setPicked(["전체"]);
    } else {
      if (_picked.includes("전체")) {
        const totalChipIndex = _picked.findIndex(
          (_chip: string) => _chip === "전체"
        );
        _picked.splice(totalChipIndex, 1);
      }

      const currPickedChipIndex = _picked.findIndex(
        (_chip: string) => _chip === currentChip
      );

      if (currPickedChipIndex > -1) {
        _picked.splice(currPickedChipIndex, 1);
      } else {
        _picked.push(currentChip);
      }

      setPicked(_picked);
    }
  };

  useEffect(() => {
    pickEvent(picked);
  }, [picked]);

  return (
    <div className={`flex gap-6`}>
      {filteringList.map((category) => (
        <Chip
          color={type === "business" ? "red" : "green"}
          chipInfo={category}
          isPicked={picked.includes(category)}
          onClickEvent={clickChipEvent}
        ></Chip>
      ))}
    </div>
  );
};

export default ChipWrap;
