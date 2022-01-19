import "./App.css";
// import Sidebar from "../Sidebar";
// import Daybox from "../Daybox";
// import Topic from "../Topic";
// import Topbar from "../Topbar";
import React, { useState, useEffect } from "react";

// let day = "Day 2";
// let week = "Week 3";
// let overview = "Learning React";
// let lessonTopic = "useReducer";
// let resourceLinks = [
//   "link to awesome resource!",
//   "link to awesome resource!",
//   "link to awesome resource!",
// ];



function App() {
  const [apiData, setApiData] = useState([9]);
  // const [isOn, setIsOn] = useState(false);
  // function dropDown() {
  //     return setIsOn((isOn) => !isOn);
  // }

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

          {/* <nav className="nav">
              <ul id="weekList">
                  {apiData.map(({ weekname, weekid, daysid }) => {
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
                                          return <li>Day 4</li>;
                                      } else {
                                          return <li>Day {day % 4}</li>;
                                      }
                                  })}
                              </ul>
                          </li>
                      );
                  })}
              </ul>
          </nav> */}
          {/* <main>
              <div className="topbar">
                  <h3 className="topText">{week}</h3>
              </div>
              <div className="daybox">
                  <h1 className="dayText">{day}</h1>
                  <h4 className="overview">{overview}</h4>
              </div>
              <div className="topics">
                  <h2 className="topicTitle">{lessonTopic}</h2>
                  <div className="scroll">
                      <ul>
                          {resourceLinks.map((resourcelink) => {
                              return <li>{resourcelink}</li>;
                          })}
                      </ul>
                  </div>
                  <div className="submitBox">
                      <input className="inputBox"></input>
                      <button className="submitButton">Submit</button>
                  </div>
              </div>
          </main> */}
      </div>
  );
}

export default App;
