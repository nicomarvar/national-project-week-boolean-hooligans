function Daybox({ day, overview }) {
  return (
    <div className="daybox">
      <h1 className="dayText">{day}</h1>
      <h4 className="overview">{overview}</h4>
    </div>
  );
}

export default Daybox;
