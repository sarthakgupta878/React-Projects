import React, { useContext } from 'react'
import noteContext from '../context/notes/noteContext';

const Noteitem = (props) => {

    const context = useContext(noteContext);
    const { deleteNote } = context;

    const { note,updateNote } = props
    return (
        <div className="col-md-3">
            <div className="card my-3">
                <div className="card-body">
                    <div className="d-flex align-items-center">
                        <h4 className="card-title">{note.title}</h4>
                        <i className="far fa-trash-alt mx-2" onClick={() => { deleteNote(note._id); props.showAlert("Deleated Successfully","success"); }}></i>
                        <i className="fa-solid fa-pen-to-square mx-2" onClick={() => {updateNote(note)}} ></i>
                    </div>
                    <h6 className="card-title">{note.tag}</h6>
                    <p className="card-text">{note.description}</p>
                </div>
            </div>
        </div>
    )
}

export default Noteitem