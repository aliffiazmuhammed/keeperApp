import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [note,setnotes] = React.useState([])
  function getItems(items){
    console.log(items)
      setnotes((prev)=>{
        return [...prev,items]
        
      })
  }

function deleteItem(indx){
    
  setnotes((prev)=>{
    return prev.filter((item,ind)=>{
      return ind !== indx
    })
  })
  console.log(note)
  // console.log(indx)
    
}
  
  return (
    <div>
      <Header />
      <CreateArea addItem={getItems} />
      {note.map((nt,index)=>{

        return <Note key={index} id={index} title={nt.title} content={nt.content}  dltItem={deleteItem}/>
      })}
      
      <Footer />
    </div>
  );
}

export default App;
