import React, { useState, useEffect } from "react";

function Topic({ topicId }) {
  const [links, setLinks] = useState([]);
  const [topics, setTopic] = useState("");

  useEffect(function(){
    async function fetchTopic(){
        const request = await fetch(`https://boolean-hooligans.herokuapp.com/subjects/${topicId}`);
        const response = await request.json();
        console.log("called")
        setLinks(response.payload[0].links);
    }
    
    fetchTopic();
}, [topicId])

  useEffect(function(){
      async function fetchTopic(){
          const request = await fetch(`https://boolean-hooligans.herokuapp.com/subjects/${topicId[0]}`);
          const response = await request.json();
          setTopic([response.payload[0].subjectname]);
      }
      fetchTopic();
  }, [topicId])

  async function handleSubmit(e, id) {
    e.preventDefault();
    let resource = e.target.children[0].value;
    const request = await fetch(
      `https://boolean-hooligans.herokuapp.com/subjects/${id}`,
      {
        method: "PATCH",
        body: JSON.stringify({
          resources: resource,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );
    const response = await request.json();
    console.log(response);
    setLinks(response.payload[0].links);
  }


  return <div className="topics">
          <h2 className="topicTitle">{topics}</h2>
          <div className="scroll">
              <ul>
              <h3>Some useful resources:</h3>
                  {
                    links.map((link) => {
                        return <li><a href={link} target="_blank">{link}</a></li>
                    })
                  }
              </ul>
          </div>
               <form className="submitBox" onSubmit={(e) => { handleSubmit(e, topicId[0])}}>
          <input className="inputBox"></input>
          <button className="submitButton" type="submit">
            Submit
          </button>
        </form>
      </div>
  }
//   return (
//     <div className="topics">
//       {
//           topicId.map((topic) => {
//             return <h2 className="topicTitle">{topics}</h2>
//           })
//       }
//       <div className="scroll">
//         <ul>
//           {links.map((link) => {
//             return <li>{link}</li>;
//           })}
//         </ul>
//       </div>
//       <form
//         className="submitBox"
//         onSubmit={(e) => {
//           handleSubmit(e, topicId);
//         }}
//       >
//         <input className="inputBox"></input>
//         <button className="submitButton" type="submit">
//           Submit
//         </button>
//       </form>
//     </div>
//   );
export default Topic;
