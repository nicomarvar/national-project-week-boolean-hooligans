import "./App.css";
// import Sidebar from "../Sidebar";
import Daybox from "../Daybox";
import Topic from "../Topic";
import Topbar from "../Topbar";
import React, { useState, useEffect } from "react";

let day = "Day 2";
let week = "Week 3";
let overview = "Learning React";
let lessonTopic = "useReducer";
let resourceLinks = [
  "link to awesome resource!",
  "link to awesome resource!",
  "link to awesome resource!",
];



function App() {
  const [apiData, setApiData] = useState([]);
  const [isOn, setIsOn] = useState(false);
  const [dayId, setDayId] = useState(0)
  function dropDown() {
      return setIsOn((isOn) => !isOn);
  }
  function gettingDay(id){
    setDayId(id)
    console.log(dayId)
  }

  useEffect(() => {
    FetchApi();
  }, []);
  async function FetchApi() {
    const response = await fetch("https://boolean-hooligans.herokuapp.com/");
    const data = await response.json();

    setApiData(data.payload);
  }

console.log(apiData)

  return (
      <div className="App">

        <nav className="nav">
            <ul id="weekList">
                {apiData?.map(({ weekname, weekid, daysid }) => {
                    return (
                        <li>
                            <button onClick={dropDown}> {weekname}</button>
                            <ul
                                id={weekid}
                                className={
                                    isOn ? "display-show" : "display-none"
                                }
                            >
                                {daysid.map((day) => {
                                    if (day % 4 === 0) {
                                        return <li id = {day} onClick={()=>{gettingDay({day})}}>Day 4</li>;
                                    } else {
                                        return <li id = {day} onClick={()=>{gettingDay({day})}}>Day {day % 4}</li>;
                                    }
                                })}
                            </ul>
                        </li>
                    );
                })}
            </ul>
        </nav>
        <main>
            <Topbar week={week} />
            <Daybox day={day} overview={overview}/>
            <Topic lessonTopic={lessonTopic} resourceLinks={resourceLinks}/>
        </main>
      </div>
  );
}

export default App;
