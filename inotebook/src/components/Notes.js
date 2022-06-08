import React, { useContext, useEffect, useRef ,useState} from 'react'
import { useNavigate } from 'react-router-dom';
import noteContext from '../context/notes/noteContext';
import AddNote from './AddNote';
import Noteitem from './Noteitem';

const Notes = (props) => {
  const [note, setNote] = useState({ id:"" ,etitle: "",edescription: "",etag: ""})
 let navigate= useNavigate();
  const context = useContext(noteContext);
  const { notes, getNotes,editNote } = context;
  useEffect(() => {
    if(localStorage.getItem('auth-token')){

      getNotes();
    }
    else
    {
      navigate('/login')
    }
    // eslint-disable-next-line 
  }, [])

  const updateNote = (currentNote) => {
    ref.current.click()
    setNote({ id: currentNote._id,etitle: currentNote.title,edescription: currentNote.description,etag: currentNote.tag})
    
  }

  const handleClick = (e) =>{
    // console.log("updating")
    editNote(note.id,note.etitle,note.edescription,note.etag);
    refClose.current.click()
    props.showAlert("Updated Successfully","success")

  }

  const onChange = (e) =>{
    setNote({...note,[e.target.name]:e.target.value})
    // console.log(note)
  }
  
  const ref = useRef(null)
  const refClose = useRef(null)


  return (
    <>
      <AddNote showAlert={props.showAlert}/>

      <button type="button" className="btn btn-primary d-none" ref={ref} data-bs-toggle="modal" data-bs-target="#exampleModal">
      </button>
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form className='my-3'>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">Title</label>
                  <input type="text" className="form-control" value={note.etitle} id="etitle" name='etitle' onChange={onChange} aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">Description</label>
                  <input type="text" className="form-control" value={note.edescription} name='edescription' onChange={onChange} id="edescription" />
                </div>
                <div className="mb-3">
                  <label htmlFor="tag" className="form-label">Tag</label>
                  <input type="text" className="form-control" name='etag' value={note.etag} onChange={onChange} id="etag" />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" ref={refClose} className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" disabled={note.etitle.length<3 || note.edescription.length <5} onClick={handleClick} className="btn btn-primary">Update Note</button>
            </div>
          </div>
        </div>
      </div>
      <div className="row my-3">
        <h1>Your Notes</h1>
        <div className='container mx-2'>
        {notes.length === 0 &&`No notes to display`}
        </div>
        {notes.map((note) => {
          return <Noteitem key={note._id} updateNote={updateNote} showAlert={props.showAlert} note={note} />
        })}
      </div>
    </>
  )
}

export default Notes