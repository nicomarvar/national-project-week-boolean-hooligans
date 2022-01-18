import "./App.css";
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
      <h1>it is lunch time soon</h1>
      <main>
        <Topbar week={week}></Topbar>
        <Daybox day={day} overview={overview}></Daybox>
        <Topic lessonTopic={lessonTopic} resourceLinks={resourceLinks}></Topic>
      </main>
    </div>
  );
}

export default App;
