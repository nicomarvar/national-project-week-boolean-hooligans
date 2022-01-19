import React, {useState} from "react";

const weeks = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const days = [1, 2, 3, 4, 5];

function WeekButtons() {

  const [isOn, setIsOn] = useState(false)
  function dropDown(){
    return setIsOn((isOn) => !isOn);
  }

  return (
    <ul id="weekList">
      {weeks.map((week) => {
        return (
            <li>
                <button onClick={dropDown}> Week {week}</button>
                <ul
                    id={week}
                    className={isOn ? "display-show" : "display-none"}
                >
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
