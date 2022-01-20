import React, { useState } from "react";
import DayButtons from "./DayButtons";

function WeekButtons({ apiData, gettingDay, gettingWeek }) {
  const [isOn, setIsOn] = useState(null);
  function dropDown(index) {
    console.log("dropdown");
    //if it's not null and the stored number isn't equal to the index passed then we want to setIsOn to be index.
    if (isOn !== null && isOn !== index) {
      console.log("if");
      return setIsOn(index);
    } else if (isOn === null) {
      return setIsOn(index);
    } else {
      console.log("else");
      return setIsOn(null);
    }
}
    return (
        <ul id="weekList" className="nav">
            {apiData?.map(({ weekname, weekid, daysid }, index) => {
                return (
                    <li>
                        <button
                            onClick={() => {
                                dropDown(index);
                                gettingWeek(weekname);
                            }}
                            className={
                                isOn === index ? "color-on" : "color-none"
                            }
                        >
                            {weekname}
                        </button>
                        <ul
                            id={weekid}
                            className={
                                isOn === index ? "display-show" : "display-none"
                            }
                        >
                            <DayButtons
                                daysid={daysid}
                                gettingDay={gettingDay}
                            />
                        </ul>
                    </li>
                );
            })}
        </ul>
    );
}

export default WeekButtons;
