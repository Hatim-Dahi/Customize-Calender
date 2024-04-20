import React, { useState } from "react";
import { MdArrowLeft, MdArrowRight } from "react-icons/md";
import { IoClose } from "react-icons/io5";
const Modal = ({ isOpen, onClose, handleYearChange, selectedYear }) => {
  const startYear = 1900;
  const endYear = 2050;
  const yearsPerPage = 20;

  const [currentStartYear, setCurrentStartYear] = useState(startYear);

  const visibleYears = Array.from(
    { length: yearsPerPage },
    (_, index) => currentStartYear + index
  ).filter((year) => year <= endYear);

  const handlePrevYears = () => {
    if (currentStartYear > startYear) {
      setCurrentStartYear(currentStartYear - yearsPerPage);
    }
  };

  const handleNextYears = () => {
    if (currentStartYear + yearsPerPage <= endYear) {
      setCurrentStartYear(currentStartYear + yearsPerPage);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center z-50 left-80 top-[-40px]">
      <div className="shadow-2xl w-64 h-64 flex-col rounded-lg bg-gray-200 py-2">
        <div className="flex justify-between px-4 mb-2">
          <button onClick={handlePrevYears}>
            <MdArrowLeft />
          </button>
          <button onClick={handleNextYears}>
            <MdArrowRight />
          </button>
          <button onClick={onClose}>
            <IoClose />
          </button>
        </div>
        <div className="flex flex-wrap justify-center">
          {visibleYears.map((year) => (
            <button
              key={year}
              className={`m-2 w-12 hover:bg-[#9a59b5] rounded-lg ${
                selectedYear === year ? "bg-[#9a59b5]" : ""
              }`}
              onClick={() => handleYearChange(year)}
            >
              {year}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Modal;
