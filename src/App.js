import React, { useState, useEffect } from "react";

import css from '../src/App.css'

import CreateArea from "./components/CreateArea";
import Note from "./components/Note";
import Count from "./components/Count";

import Button from "./components/Button";
import { useSelector } from "react-redux";
import History from "./components/History";

function App() {
  
const [edit, setEdit] = useState('')
const [togg, setTogg] = useState(true)
  const notes = useSelector((state)=>state);
  
 
  
//  console.log(notes)
    function handleEdit(id){
      const editItem = notes.find((elem,ind)=> id === ind);
      setEdit({
        editItem,
        id
      })
      console.log(edit)
      setTogg(false)
    }




  return (
    <div className="App">
 
      <Count
        count={
          notes.length === 0
            ? "Empty"
            : `Showing ${notes.length} Cards in Database`
        }
      />
      <CreateArea edit={edit} setEdit={setEdit} togg={togg} />

      {notes.map((note, index) => (
        <Note
          key={index}
          id={index}
     
          title={note.title}
          categ={note.categories}
          content={note.content}
          handleEdit={handleEdit}
      
        />
      ))}

 
      <Button/>
     {/* { ht.map((card, ind)=> {
       return <History card={card} key={ind}/>
      //  console.log(card)
      })} */}
    
     
    
    </div>
  );
}

export default App;
