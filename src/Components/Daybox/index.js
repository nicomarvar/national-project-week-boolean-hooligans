import React, { useState, useEffect } from "react";

function Daybox({ overview, dataId }) {
  const [mainDay, setMainDay] = useState("");
  useEffect(() => {
    FetchData();
  });
  async function FetchData() {
    const response = await fetch(
      `https://boolean-hooligans.herokuapp.com/days/${dataId.day}`
    );
    //Set the day to change the route it fetches data from
    const data = await response.json();
    setMainDay(data.payload[0].dayname);
  }
  //Managed to get the h1 to display the day one from the actual api!!

  return (
    <div className="daybox">
      <h1 className="dayText">{mainDay}</h1>
      <h4 className="overview">{overview}</h4>
    </div>
  );
}

export default Daybox;
