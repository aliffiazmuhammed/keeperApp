import React from "react";

function Note(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      {console.log(props.id)}
      <button onClick={()=>{
        props.dltItem(props.id)
      }}>DELETE</button>
    </div>
  );
}

export default Note;
