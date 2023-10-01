import React, { useContext, useState } from "react";
import noteContext from "../Context/notecontext/NoteContext";
import NoteState from "../Context/notecontext/NoteState";
import NotesItem from "./NotesItem";

const AddNote = () => {
  const Context = useContext(noteContext);
  const {addNote } = Context;

  const [note, setNote] = useState({ title: "", description: "", tag: "" });
  const onChange = (e) => {
    setNote({...note ,[e.target.name] : e.target.value});
  };
  const onClick = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
        setNote({title: "", description: "", tag: ""})
  };

  return (
    <div className="container">
      <h2>Add your notes</h2>

      <form>
        <div className="col-md-3 mb-3   ">
          <label htmlFor="title" className="form-label">
            title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            aria-describedby="emailHelp"
            onChange={onChange}
            // minLength={note.title===5}
          />
        </div>
        <div className="col-md-3 mb-3">
          <label htmlFor="Description" className="form-label">
            description
          </label>
          <input
            type="text"
            className="form-control"
            id="description"
            name="description"
            onChange={onChange}
            // minLength={note.title===5}

          />
        </div>
        <div className="col-md-3 mb-3">
          <label htmlFor="tag" className="form-label">
            tag
          </label>
          <input
            type="text"
            className="form-control"
            id="tag"
            name="tag"
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
        <button disabled = {note.title.length < 5 || note.description.length < 5 } type="submit" className="btn btn-primary" onClick={onClick}>
          Add Note
        </button>
      </form>

      <h2>Your notes </h2>
    </div>
  );
};

export default AddNote;
