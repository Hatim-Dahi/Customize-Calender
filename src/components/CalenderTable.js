import React, { memo } from "react";
function getDaysInMonth(year, month) {
  const startDate = new Date(year, month, 1);
  const endDate = new Date(year, month + 1, 0);
  const daysInMonth = [];
  for (
    let date = new Date(startDate);
    date <= endDate;
    date.setDate(date.getDate() + 1)
  ) {
    daysInMonth.push(new Date(date));
  }

  const firstDayIndex = startDate.getDay();

  return { daysInMonth, firstDayIndex };
}

function CalenderTable({ year, month }) {
  const { daysInMonth, firstDayIndex } = getDaysInMonth(year, month);
  console.log(daysInMonth, firstDayIndex);
  const numRows = Math.ceil(daysInMonth.length / 7);

  return (
    <div className="w-full h-full px-2">
      <table className="w-full bg-slate-300 ">
        <thead className="text-sm">
          <tr>
            <th>Sun</th>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thu</th>
            <th>Fri</th>
            <th>Sat</th>
          </tr>
        </thead>
        <tbody className="text-sm">
          {Array.from({ length: numRows }).map((_, rowIndex) => (
            <tr key={rowIndex} className="text-center cursor-pointer">
              {Array.from({ length: 7 }).map((_, colIndex) => {
                const dayIndex = rowIndex * 7 + colIndex;
                const date = daysInMonth[dayIndex];
                const isCurrentMonth = date && date.getMonth() === month;
                console.log(
                  rowIndex,
                  "* ",
                  7,
                  "+ ",
                  colIndex,
                  "= ",
                  dayIndex,
                  ":",
                  date,
                  isCurrentMonth
                );
                return (
                  <td key={colIndex}>
                    {isCurrentMonth &&
                      dayIndex >= firstDayIndex &&
                      dayIndex - firstDayIndex + 1}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default memo(CalenderTable);
