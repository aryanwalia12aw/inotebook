import React, { useContext, useEffect, useRef,useState} from "react";
import noteContext from "../Context/notecontext/NoteContext";
import NotesItem from "./NotesItem";
import AddNote from "./AddNote";



const Notes = () => {
  const context = useContext(noteContext);
  const { notes, getNote, editNote } = context;
  useEffect(() => {
      getNote()
      // eslint-disable-next-line
  }, [])
  const ref = useRef(null)
  const refClose = useRef(null)
  const [note, setNote] = useState({id: "", etitle: "", edescription: "", etag: ""})

  const updateNote = (currentNote) => {
      ref.current.click();
      setNote({id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag:currentNote.tag})
  }

  const handleClick = (e)=>{ 
      editNote(note.id, note.etitle, note.edescription, note.etag)
      refClose.current.click();
  }

  const onChange = (e)=>{
      setNote({...note, [e.target.name]: e.target.value})
  }
  
  return (
    <>
    <AddNote/>

<button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>


<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <form>
        <div className="mb-3   ">
          <label htmlFor="title" className="form-label">
            title
          </label>
          <input
            type="text"
            className="form-control"
            id="etitle"
            name="etitle"
            value={note.etitle}
            aria-describedby="emailHelp"
            onChange={onChange}
          />
        </div>
        <div className=" mb-3">
          <label htmlFor="Description" className="form-label">
            description
          </label>
          <input
            type="text"
            className="form-control"
            id="edescription"
            name="edescription"
            value={note.edescription}
            onChange={onChange}
          />
        </div>
        <div className=" mb-3">
          <label htmlFor="tag" className="form-label">
            tag
          </label>
          <input
            type="text"
            className="form-control"
            id="etag"
            name="etag"
            value={note.etag}

            onChange={onChange}
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          
        </div>
        <button type="submit" className="btn btn-primary" onClick={handleClick}>
          Update Note
        </button>
      </form>
      
      </div>
      <div className="modal-footer">
        <button   ref = {refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button  type="button" className="btn btn-primary" data-bs-dismiss="modal">Save changes</button>
      </div>
    </div>
  </div>
</div>
    <div className="text-align-center">
  
       {
  

       notes.map((note , index )=>{
     return <NotesItem key = {index} updateNote = {updateNote} note = {note}/>
  
            })}
    </div>
    </>
  )
}

export default Notes
                                      