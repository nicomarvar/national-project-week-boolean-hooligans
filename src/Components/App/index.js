import "./App.css";
// import Sidebar from "../Sidebar";
import Daybox from "../Daybox";
import Topic from "../Topic";
import Topbar from "../Topbar";
import React, { useState, useEffect } from "react";

let day = "Day 2";
let week = "Week 3";
let overview = "The Days Topics";
let lessonTopic = "useReducer";
let resourceLinks = [
  "link to awesome resource!",
  "link to awesome resource!",
  "link to awesome resource!",
];

function App() {
  const [apiData, setApiData] = useState([]);
  const [dayId, setDayId] = useState(1);
  const [isOn, setIsOn] = useState(null);
  const [theWeek, setTheWeek] = useState("");

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
  function gettingDay(id) {
    setDayId(id);
  }
  function gettingWeek(theWeekName) {
    setTheWeek(theWeekName);
  }
  useEffect(() => {
    FetchApi();
  }, []);
  async function FetchApi() {
    const response = await fetch("https://boolean-hooligans.herokuapp.com/");
    const data = await response.json();
    setApiData(data.payload);
  }

  return (
    <div className="App">
      <nav className="nav">
        <ul id="weekList">
          {apiData?.map(({ weekname, weekid, daysid }, index) => {
            return (
              <li>
                <button
                  onClick={() => {
                    dropDown(index);
                    gettingWeek(weekname);
                  }}
                >
                  {weekname}
                </button>
                <ul
                  id={weekid}
                  className={isOn === index ? "display-show" : "display-none"}
                >
                  {daysid.map((day) => {
                    if (day % 4 === 0) {
                      return (
                        <li
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
                </ul>
              </li>
            );
          })}
        </ul>
      </nav>
      <main>
        <Topbar week={theWeek} />
        <Daybox dataId={dayId} day={day} overview={overview} />
        <Topic lessonTopic={lessonTopic} resourceLinks={resourceLinks} />
      </main>
    </div>
  );
}

export default App;
