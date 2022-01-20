import React, {useState}  from "react";

function Topic({ lessonTopic, resourceLinks }) {

    const [links, setLinks] = useState([])

    async function handleSubmit(e, id){
        e.preventDefault()
        let resource = e.target.children[0].value
        const request = await fetch(`https://boolean-hooligans.herokuapp.com/subjects/${id}`, 
        {
            method:"PATCH",
            body: JSON.stringify({
            resources: resource
            }),
            headers: {
            "Content-type": "application/json; charset=UTF-8"
            }
        });
        const response = await request.json();
        console.log(response)
        setLinks(response.payload[0].links)
    }
    
  return (
    <div className="topics">
      <h2 className="topicTitle">{lessonTopic}</h2>
      <div className="scroll">
        <ul>
          {links.map((link) => {
            return <li>{link}</li>;
          })}
        </ul>
      </div>
      <form className="submitBox" onSubmit={(e) => {handleSubmit(e,1)}}>
        <input className="inputBox"></input>
        <button className="submitButton" type="submit">Submit</button>
      </form>
    </div>
  );
}
export default Topic;
