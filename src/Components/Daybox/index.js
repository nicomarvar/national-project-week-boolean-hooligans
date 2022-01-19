import React, { useState, useEffect } from "react";

function Daybox({ day, overview, dataId }) {
  const [mainDay, setMainDay] = useState([]);
  useEffect(() => {
    FetchData();
  }, [dataId]);
  async function FetchData() {
    const response = await fetch(
      `https://boolean-hooligans.herokuapp.com/days/${dataId}`
    );
    const data = await response.json();
    console.log(data);
    setMainDay(data);
  }
  return (
    <div className="daybox">
      <h1 className="dayText">{mainDay}</h1>
      <h4 className="overview">{overview}</h4>
    </div>
  );
}

export default Daybox;
