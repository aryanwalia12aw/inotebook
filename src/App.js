import Navbar from "./components/Navbar";
import "./App.css";
import { BrowserRouter , Route, Routes } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import NoteState from "./Context/notecontext/NoteState";
import Alert from "./components/Alert";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  return (
    <>
    <div className="app" >
      <NoteState>
      <BrowserRouter>
        <Navbar/>
        <Alert/>
       
        {/* <Signup/> */}
        <Routes>
          <Route path="/" element = {<Home />}/>
          <Route path="/login" element = { <Login/>}/>
          <Route path="/signup" element = {<Signup/>}/>
            
          
          < Route exact path="/about" element = {<About />}/>
            

        </Routes>
      </BrowserRouter>
      </NoteState>
    </div>
    </>
  );
}

export default App;
