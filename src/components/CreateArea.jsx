import React from "react";

function CreateArea(props) {

  const [items,setItems] = React.useState({title:"",content:""})

  function submitItem(event){
        props.addItem(items)
        event.preventDefault()
        setItems({title:"",content:""})
  }
  function handleChange(event){
      const {name,value} = event.target;
      console.log(name)
      setItems((prev)=>{
        return{
          ...prev,[name]:value
        }
      })
  }
  return (
    
    <div>
      <form>
        <input name="title" onChange={handleChange} value={items.title} placeholder="Title" />
        <textarea name="content" onChange={handleChange} value={items.content} placeholder="Take a note..." rows="3" />
        <button onClick={submitItem}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
