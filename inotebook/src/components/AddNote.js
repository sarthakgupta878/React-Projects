import React,{useContext,useState} from 'react'
import noteContext from '../context/notes/noteContext';

const AddNote = () => {
    const context = useContext(noteContext);
    const {addNote} = context;


    const [note, setNote] = useState({title: "",description: "",tag: "default"})

    const handleClick = (e) =>{
      e.preventDefault();
      addNote(note);

    }

    const onChange = (e) =>{
      setNote({...note,[e.target.name]:e.target.value})
      // console.log(note)
    }
  return (
    <div className="container my-3">
    <h1>Add a note</h1>
    <form className='my-3'>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">Title</label>
        <input type="text" className="form-control" id="title" name='title'onChange={onChange} aria-describedby="emailHelp"/>
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">Description</label>
        <input type="text" className="form-control" name='description' onChange={onChange} id="description"/>
      </div>
      <div className="mb-3">
        <label htmlFor="tag" className="form-label">Tag</label>
        <input type="text" className="form-control" name='tag' onChange={onChange} id="tag"/>
      </div>
      <button type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button>
    </form>
    </div>
  )
}

export default AddNote