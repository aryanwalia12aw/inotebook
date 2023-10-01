import React, { useContext, useState } from "react";
import noteContext from "../Context/notecontext/NoteContext";
import NoteState from "../Context/notecontext/NoteState";
import Notes from "./Notes";


const Home = () => {

  return (
    <div>
      <Notes/>
     
    </div>
  );
};

export default Home;
