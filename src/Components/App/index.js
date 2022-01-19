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
  "link to awesome resource!",
  "link to awesome resource!",
  "link to awesome resource!",
  "link to awesome resource!",
  "link to awesome resource!",
  "link to awesome resource!",
  "link to awesome resource!",
  "link to awesome resource!",
  "link to awesome resource!",
  "link to awesome resource!",
  "link to awesome resource!",
  "link to awesome resource!",
  "link to awesome resource!",
];

function App() {
  const [apiData, setData] = useState([9]);
  useEffect(() => {
    FetchApi();
  });
  async function FetchApi() {
    const response = await fetch("https://boolean-hooligans.herokuapp.com/");
    const data = await response.json();
    console.log("called");
    setData(data);
  }
  FetchApi();
  console.log(apiData);
  return (
    <div className="App">
      <Sidebar className="sidebar" />
      <main>
        <Topbar week={week} className="header"></Topbar>
        <Daybox day={day} overview={overview} className="main"></Daybox>
        <Topic lessonTopic={lessonTopic} resourceLinks={resourceLinks}></Topic>
      </main>
    </div>
  );
}

export default App;
