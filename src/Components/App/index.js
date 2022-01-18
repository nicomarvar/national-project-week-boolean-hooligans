import "./App.css";
import Sidebar from "../Sidebar";
import Daybox from "../Daybox";
import Topic from "../Topic";
import Topbar from "../Topbar";

let day = "Day 2";
let week = "Week 3";
let overview = "Learning React";
let lessonTopic = "useReducer";
let resourceLinks = "link to awesome resource!";

function App() {
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
