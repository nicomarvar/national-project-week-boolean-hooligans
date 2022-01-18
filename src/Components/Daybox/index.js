function Daybox({ day, overview }) {
  return (
    <div className="daybox">
      <h1>{day}</h1>
      <h4>{overview}</h4>
    </div>
  );
}

export default Daybox;
