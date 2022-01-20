import "./App.css";
import Sidebar from "../Sidebar";
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
  const [dayId, setDayId] = useState(1);

  function gettingDay(id) {
    setDayId(id);
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
      <Sidebar apiData={apiData} gettingDay={gettingDay}/>
      <main>
        <Topbar week={week} />
        <Daybox dataId={dayId} day={day} overview={overview} />
        <Topic lessonTopic={lessonTopic} resourceLinks={resourceLinks} />
      </main>
    </div>
  );
}

export default App;
