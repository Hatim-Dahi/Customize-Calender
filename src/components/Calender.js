import React, { memo, useState } from "react";
import CalenderHeader from "./CalenderHeader";
import CalenderTable from "./CalenderTable";

function Calender() {
  const [monthIndex, setMonthIndex] = useState(0);
  const [yearNumber, setYearNumber] = useState(2024);
  return (
    <div className="border-sm flex justify-center items-center bg-[#9a59b5] w-[100wv] h-[100vh] text-lg shadow-lg shadow-black ">
      <div className="bg-white w-[20rem] h-[20rem] rounded-md">
        <CalenderHeader
          setMonthIndex={setMonthIndex}
          setYearNumber={setYearNumber}
        />
        <CalenderTable month={monthIndex} year={yearNumber} />
      </div>
    </div>
  );
}

export default memo(Calender);
