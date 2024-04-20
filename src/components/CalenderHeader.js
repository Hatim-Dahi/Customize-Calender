import React, { memo, useState } from "react";
import { MdArrowLeft, MdArrowRight } from "react-icons/md";
import Modal from "./Modal";

function CalenderHeader({ setMonthIndex, setYearNumber }) {
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
  const [currentYear, setCurrentYear] = useState(2024);
  const [isModalOpen, setIsModalOpen] = useState(false);
  console.log("year:", currentYear, "index:", currentIndex);
  const handlePrev = () => {
    if (currentIndex === 0) {
      setCurrentIndex(11);
      setCurrentYear((prev) => prev - 1);
      return;
    }
    const newIndex = currentIndex - 1;
    setCurrentIndex(newIndex);
    setMonthIndex(newIndex);
  };
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleNext = () => {
    if (currentIndex === 11) {
      setCurrentIndex(0);
      setCurrentYear((prev) => prev + 1);
      return;
    }
    const newIndex = currentIndex + 1;
    setCurrentIndex(newIndex);
    setMonthIndex(newIndex);
  };

  const handleYearChange = (e) => {
    const newYear = parseInt(e);
    setCurrentYear(newYear);
    setYearNumber(newYear);
    setIsModalOpen(false);
  };
  return (
    <div className=" h-12 flex justify-between items-center px-4 border-b border-black font-medium py-2 shadow-md mb-2">
      <button onClick={handlePrev}>
        <MdArrowLeft />
      </button>
      <div className="w-24 flex justify-center">{monthNames[currentIndex]}</div>

      <button id="yearbtn" onClick={toggleModal}>
        {currentYear}
      </button>
      <Modal
        isOpen={isModalOpen}
        onClose={toggleModal}
        handleYearChange={handleYearChange}
        selectedYear={currentYear}
      />

      <button onClick={handleNext}>
        <MdArrowRight />
      </button>
    </div>
  );
}

export default memo(CalenderHeader);
