import React, { memo, useState } from "react";
import CalenderHeader from "./CalenderHeader";
import CalenderTable from "./CalenderTable";

function Calender() {
  const [monthIndex, setMonthIndex] = useState(0);
  return (
    <div className="border-sm flex justify-center items-center bg-cyan-500 w-[100wv] h-[100vh] text-lg shadow-lg shadow-black ">
      <div className="bg-gray-200 w-[18rem] h-80 rounded-md">
        <CalenderHeader setMonthIndex={setMonthIndex} />
        <CalenderTable month={monthIndex} year={2024} />
      </div>
    </div>
  );
}

export default memo(Calender);
