import React from "react";

const weeks = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const days = [1, 2, 3, 4, 5];

function WeekButtons() {
  return (
    <ul id="weekList">
      {weeks.map((week) => {
        return (
          <li>
            Week {week}
            <ul id="dayList">
              {days.map((day) => {
                return <li>Day {day}</li>;
              })}
            </ul>
          </li>
        );
      })}
    </ul>
  );
}

export default WeekButtons;
