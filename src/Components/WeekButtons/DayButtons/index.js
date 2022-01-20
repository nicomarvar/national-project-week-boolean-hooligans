import React from "react";

function DayButtons({ daysid, gettingDay }) {
  return (
    <>
      {daysid.map((day) => {
        if (day % 4 === 0) {
          return (
            <li
              className="dayListButton"
              id={day}
              onClick={() => {
                gettingDay({ day });
              }}
            >
              Day 4
            </li>
          );
        } else {
          return (
            <li
              className="dayListButton"
              id={day}
              onClick={() => {
                gettingDay({ day });
              }}
            >
              Day {day % 4}
            </li>
          );
        }
      })}
    </>
  );
}

export default DayButtons;
