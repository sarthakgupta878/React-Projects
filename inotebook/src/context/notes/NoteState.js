
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
    return (
        <NoteContext.Provider value = {{notes,setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;