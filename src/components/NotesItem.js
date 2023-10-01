import React, { useContext} from "react";
import noteContext from "../Context/notecontext/NoteContext";




const NotesItem = (props) => {
  const Context = useContext(noteContext)
const {deleteNote  ,editNote } = Context ; 


  
    const {note,updateNote} = props;
  return (
    <div >
   <div className='row my-3 col-md-3'>
      <div className="card my-3" >
  <div className="card-body">
  <div className="d-flex">
    <i className="fa fa-solid fa-trash mx-2" onClick= {()=>{(deleteNote(note._id))}}></i>
    <i className="fa fa-edit text-align-center"  onClick= {()=>{(updateNote(note))}}></i>
    
 </div>
    <h5 className="card-title">{note.title}</h5>
    <p className="card-text">{note.description}</p>

    
    
  </div>
</div>
    </div></div>
  )
}

export default NotesItem
