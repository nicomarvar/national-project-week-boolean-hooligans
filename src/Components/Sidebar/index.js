import React from "react";
import WeekButtons from "../WeekButtons";

function Sidebar({ apiData, gettingDay, gettingWeek }) {
    return (
        <nav className="nav">
            <WeekButtons
                apiData={apiData}
                gettingDay={gettingDay}
                gettingWeek={gettingWeek}
            />
        </nav>
    );
}

export default Sidebar;
