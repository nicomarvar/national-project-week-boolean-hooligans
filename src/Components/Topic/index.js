function Topic({ lessonTopic, resourceLinks }) {
  return (
    <div className="topics">
      <h2>{lessonTopic}</h2>
      <div className="scroll">
        <ul>
          {resourceLinks.map((resourcelink) => {
            return <li>{resourcelink}</li>;
          })}
        </ul>
      </div>
      <input className="inputBox"></input>
      <button>Submit</button>
    </div>
  );
}
export default Topic;
