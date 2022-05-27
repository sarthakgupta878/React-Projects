
import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props)=>{
   const notesInitial = [
    {
      "_id": "62838fae1394d69dbf99b47b",
      "user": "62838eab1394d69dbf99b478",
      "title": "sarthak",
      "description": "sarthak@gmail.com",
      "tag": "sarthak",
      "date": "2022-05-17T12:06:06.001Z",
      "__v": 0
    },
    {
      "_id": "62838fc01394d69dbf99b47d",
      "user": "62838eab1394d69dbf99b478",
      "title": "sarthak1",
      "description": "sarthak@gmail.com1",
      "tag": "sarthak1",
      "date": "2022-05-17T12:06:24.234Z",
      "__v": 0
    }
  ]
  const [notes,setNotes] = useState(notesInitial)
 
  // Add a Note
  const addNote = ({title,description,tag}) =>{
    console.log("Adding Notes")
    // console.log(title)
   const note= {
      "_id": "62838fc01394d69dbf99b40d",
      "user": "62838eab1394d69dbf99b478",
      "title": title,
      "description": description,
      "tag": tag,
      "date": "2022-05-17T12:06:24.234Z",
      "__v": 0
    };
    setNotes(notes.concat(note))
  }


  // Delete a Note
const deleteNote = () =>{
    
  }


  // Edit a Note
  const editNote = () =>{
    
  }

    return (
        <NoteContext.Provider value = {{notes,addNote,deleteNote,editNote}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;