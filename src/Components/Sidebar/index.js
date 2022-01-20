import React from "react";
import WeekButtons from "../WeekButtons";

function Sidebar({apiData, gettingDay}) {

  return (
      <nav className="nav">
          <WeekButtons apiData={apiData} gettingDay={gettingDay}/>
      </nav>
  );
}

export default Sidebar;
