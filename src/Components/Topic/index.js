function Topic({ lessonTopic, resourceLinks }) {
  return (
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
  );
}
export default Topic;
