import "./App.css";
import WeekButtons from "../WeekButtons";
import Daybox from "../Daybox";
import Topic from "../Topic";
import Topbar from "../Topbar";
import React, { useState, useEffect } from "react";

let overview = "";

function App() {
  const [apiData, setApiData] = useState([]);
  const [dayId, setDayId] = useState(1);
  const [theWeek, setTheWeek] = useState("");
  const [topicId, setTopicId] = useState([1]);

  function gettingTopic(id) {
    setTopicId(id);
  }

  function gettingDay(id) {
    setDayId(id);
  }
  function gettingWeek(theWeekName) {
    setTheWeek(theWeekName);
  }
  useEffect(() => {
    async function FetchApi() {
      const response = await fetch("https://boolean-hooligans.herokuapp.com/");
      const data = await response.json();
      setApiData(data.payload);
    }
    FetchApi();
  }, []);
  console.log(topicId);
  return (
    <div className="App">
      <WeekButtons
        gettingTopic={gettingTopic}
        gettingWeek={gettingWeek}
        apiData={apiData}
        gettingDay={gettingDay}
      />
      <main>
        <h1 id="title">School Of Code</h1>
        <Topbar week={theWeek} />
        <Daybox gettingTopic={gettingTopic} day={dayId} overview={overview} />
        <Topic topicId={topicId} />
      </main>
    </div>
  );
}

export default App;
