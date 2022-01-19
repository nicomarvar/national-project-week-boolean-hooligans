import "./App.css";
import Sidebar from "../Sidebar";
// import Daybox from "../Daybox";
// import Topic from "../Topic";
// import Topbar from "../Topbar";
import React, {useEffect, useState} from "react";

// export let data = {
//     success: true,
//     message: "found all the weeks",
//     payload: [
//         { weekid: 1, weekname: "Week One", daysid: [1, 2, 3, 4] },
//         { weekid: 2, weekname: "Week Two", daysid: [5, 6, 7, 8] },
//         { weekid: 3, weekname: "Week Three", daysid: [9, 10, 11, 12] },
//         { weekid: 4, weekname: "Week Four", daysid: [13, 14, 15, 16] },
//         { weekid: 5, weekname: "Week Five", daysid: [17, 18, 19, 20] },
//         { weekid: 6, weekname: "Week Six", daysid: [21, 22, 23, 24] },
//         { weekid: 7, weekname: "Week Seven", daysid: [25, 26, 27, 28] },
//         { weekid: 8, weekname: "Week Eight", daysid: [29, 30, 31, 32] },
//     ],
// };


function App() {

  const [apiData, setApiData] = useState([])
useEffect(()=>{
  async function fetchApi(){
      const response = await fetch("https://boolean-hooligans.herokuapp.com/");
      const data = await response.json();
      setApiData(data.payload)
      
  }
  fetchApi();
}, [])
console.log(apiData);
  return (
    
    <div className="App">
      <Sidebar className="sidebar" weekid={apiData.weekid} weekname={apiData.weekname} daysid={apiData.daysid}/>
      <main>a
        {/* <Topbar week={data.payload.weekname} className="header"></Topbar>
        <Daybox day={data.payload.daysid} overview={data.message} className="main"></Daybox>
        <Topic lessonTopic={data.message} resourceLinks={data.message}></Topic> */}
      </main>
    </div>
  );
}

export default App;
