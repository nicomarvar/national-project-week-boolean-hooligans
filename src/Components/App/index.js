import "./App.css";
import Sidebar from "../Sidebar";
import Daybox from "../Daybox";
import Topic from "../Topic";
import Topbar from "../Topbar";
import React, { useState, useEffect } from "react";

let overview = "Topics Of The Day";
let lessonTopic = "useReducer";
let resourceLinks = [
  "link to awesome resource!",
  "Scott !!!!!!!!",
  "link to awesome resource!",
  "link to awesome resource!",
];

function App() {
  const [apiData, setApiData] = useState([]);
  const [dayId, setDayId] = useState(1);
  const [theWeek, setTheWeek] = useState("");

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
      <Sidebar
        gettingWeek={gettingWeek}
        apiData={apiData}
        gettingDay={gettingDay}
      />
      <main>
        <Topbar week={theWeek} />
        <Daybox dataId={dayId} overview={overview} />
        <Topic lessonTopic={lessonTopic} resourceLinks={resourceLinks} />
      </main>
    </div>
  );
}

export default App;
