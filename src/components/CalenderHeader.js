import React, { memo, useState } from "react";
import { MdArrowLeft, MdArrowRight } from "react-icons/md";
function CalenderHeader({ setMonthIndex }) {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentYear, setCurrentYear] = useState(2023);
  const handlePrev = () => {
    if (currentIndex === 0) {
      return;
    }
    const newIndex = currentIndex - 1;
    setCurrentIndex(newIndex);
    setMonthIndex(newIndex);
  };
  const handleNext = () => {
    if (currentIndex === 11) {
      return;
    }
    const newIndex = currentIndex + 1;
    setCurrentIndex(newIndex);
    setMonthIndex(newIndex);
  };
  const handleDropdown = () => {};
  return (
    <div className=" h-12 flex justify-between items-center px-4 border-b border-black font-medium py-2 shadow-md mb-2">
      <button onClick={handlePrev}>
        <MdArrowLeft />
      </button>
      <div className="w-24 flex justify-center">{monthNames[currentIndex]}</div>
      <button onClick={handleDropdown}>{currentYear}</button>
      <button onClick={handleNext}>
        <MdArrowRight />
      </button>
    </div>
  );
}

export default memo(CalenderHeader);
