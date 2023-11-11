import { useState } from "react";
import { DateRange } from "react-date-range";
// import { ko } from "react-date-range/dist/locale";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

interface props {
  disabledDates: number[];
}

const BasicCalendar = ({ disabledDates }: props) => {
  const disabledDateList = disabledDates.map((date) => new Date(date));
  const [state, setState] = useState<object[]>([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  // console.log("BasicCalendar...", ko);

  return (
    <DateRange
      editableDateInputs={true}
      // locale={ko}
      onChange={(item) => setState([item.selection])}
      moveRangeOnFirstSelection={false}
      ranges={state}
      disabledDates={disabledDateList}
      dragSelectionEnabled={false}
    />
  );
};

export default BasicCalendar;
