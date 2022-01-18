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
      <Sidebar />
      <main>
        <Topbar week={week}></Topbar>
        <Daybox day={day} overview={overview}></Daybox>
        <Topic lessonTopic={lessonTopic} resourceLinks={resourceLinks}></Topic>
      </main>
    </div>
  );
}

export default App;
