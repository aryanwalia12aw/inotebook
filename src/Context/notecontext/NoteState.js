import { useState, useContext } from "react";
import noteContext from "./NoteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000";

  const intializeNotes = [];

  const [notes, setNotes] = useState(intializeNotes);
// getting all data from database
  const getNote = async () => {
    const response = await fetch(`${host}/api/notes/fetchallnotes/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRlYzEzZWZmMmE2YzdkYjRkYjdiODBlIn0sImlhdCI6MTY5MzE5MzI2M30.wbnyGtT2XRvtTZ44KTIywPx3b2GuhSvQ0yhGP3GIwHE",
      },
    });
    const json = await response.json();
    console.log(json);
    setNotes(json);
  };

  // // add notes

  // Add a Note
  const addNote = async (title, description, tag) => {
    // TODO: API Call
    // API Call 
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRlYzEzZWZmMmE2YzdkYjRkYjdiODBlIn0sImlhdCI6MTY5MzE5MzI2M30.wbnyGtT2XRvtTZ44KTIywPx3b2GuhSvQ0yhGP3GIwHE"
      },
     body: JSON.stringify({title, description, tag}) 
    });

    const note = await response.json();
    setNotes(notes.concat(note))
  }

  // delete a note
  const deleteNote = async (id, title, description, tag) => {
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE", // *GET, POST, PUT, DELETE, etc.
      // mode: "cors", // no-cors, *cors, same-origin
      // cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached

      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRlYzEzZWZmMmE2YzdkYjRkYjdiODBlIn0sImlhdCI6MTY5MzE5MzI2M30.wbnyGtT2XRvtTZ44KTIywPx3b2GuhSvQ0yhGP3GIwHE",
      },

      body: JSON.stringify({ title, description, tag }), // body data type must match "Content-Type" header
    });
    const json = await response.json(); // parses JSON response into native JavaScript objects

    console.log("deleting note with id" + id);
    const newNotes = await notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };

  // edit a note
  const editNote = async (id, title, description, tag) => {
    // API Call 
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRlYzEzZWZmMmE2YzdkYjRkYjdiODBlIn0sImlhdCI6MTY5MzE5MzI2M30.wbnyGtT2XRvtTZ44KTIywPx3b2GuhSvQ0yhGP3GIwHE"
      },
      body: JSON.stringify({title, description, tag})
    });
    const json = await response.json(); 

     let newNotes = JSON.parse(JSON.stringify(notes))
    // Logic to edit in client
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag; 
        break; 
      }
    }  
    setNotes(newNotes);
  }

  return (
    <noteContext.Provider
      value={{ notes, setNotes, addNote, deleteNote, editNote, getNote }}
    >
      {props.children}
    </noteContext.Provider>
  );
};

export default NoteState;
