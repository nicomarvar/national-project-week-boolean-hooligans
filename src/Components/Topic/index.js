function Topic({ lessonTopic, resourceLinks }) {
  return (
    <div>
      <h2>{lessonTopic}</h2>
      <div>
        <ul>
          <li>{resourceLinks}</li>
        </ul>
      </div>
      <input></input>
      <button>Submit</button>
    </div>
  );
}
export default Topic;
