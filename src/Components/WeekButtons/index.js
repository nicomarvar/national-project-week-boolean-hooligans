import React, { useState } from "react";
import DayButtons from "./DayButtons";

function WeekButtons({ weekid, daysid}) {
  const [isOn, setIsOn] = useState(false);
  // const [open, setOpen] = useState(data.payload.weekid)
  function dropDown() {
    setIsOn((isOn) => !isOn);
    handleChange()
  }
  function handleChange(){
    if(isOn){
      return document.querySelector(`#${weekid}`).className.toggle ="display-show"
    } else { 
      return document.querySelector(`#${weekid}`).className.toggle = "display-none";} 
  }

  return (
    <ul id="weekList">
      {daysid.map(({ weekname, weekid }) => {
        return (
            <li>
                <button onClick={dropDown}> {weekname}</button>
                <DayButtons id={weekid} days={daysid} />
            </li>
        );
      })}
    </ul>
  );
}

export default WeekButtons;
