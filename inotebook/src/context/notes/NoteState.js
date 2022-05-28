import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000"
  const notesInitial = []
  const [notes, setNotes] = useState(notesInitial)  

  const getNotes = async () => {
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI4MzhlYWIxMzk0ZDY5ZGJmOTliNDc4In0sImlhdCI6MTY1Mjc4ODkwN30.uozCYk4TjHDdJY6NFJMp18w83AAxrsTm3N8swC29UPw"
      },
      body: JSON.stringify()
    });

    const json = await response.json();
    // console.log(json)
    setNotes(json)
  }
  // Add a Note
  const addNote = async ({ title, description, tag }) => {

    const response = await fetch(`${host}/api/notes/addnote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI4MzhlYWIxMzk0ZDY5ZGJmOTliNDc4In0sImlhdCI6MTY1Mjc4ODkwN30.uozCYk4TjHDdJY6NFJMp18w83AAxrsTm3N8swC29UPw"
      },
      body: JSON.stringify({ title, description, tag })
    });

   response.json();

    console.log("Adding Notes")

    // console.log(title)
    const note = {
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
  const deleteNote = async (id) => {

    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI4MzhlYWIxMzk0ZDY5ZGJmOTliNDc4In0sImlhdCI6MTY1Mjc4ODkwN30.uozCYk4TjHDdJY6NFJMp18w83AAxrsTm3N8swC29UPw"
      }
    });
    const json = response.json();
    console.log(json)


    console.log("deleting " + id)

    const newNotes = notes.filter((note) => { return note._id !== id })
    setNotes(newNotes)
  }


  // Edit a Note
  const editNote = async (id, title, description, tag) => {

    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI4MzhlYWIxMzk0ZDY5ZGJmOTliNDc4In0sImlhdCI6MTY1Mjc4ODkwN30.uozCYk4TjHDdJY6NFJMp18w83AAxrsTm3N8swC29UPw"
      },
      body: JSON.stringify({ title, description, tag })
    });

    response.json();

    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }

    }

  }

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, getNotes, editNote }}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState;