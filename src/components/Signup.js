import React, { useContext } from 'react'
import noteContext from "../Context/notecontext/NoteContext";
import LoginState from '../Context/notecontext/LoginState';

const Signup = () => {


  const context = useContext(noteContext);
  const {signup} = context;

  const handleSignup =(e)=>{
    signup({name : e.name , email : e.email, password : e.password})
  }

  return (
    <div className='container'>
      <form onSubmit={handleSignup}> 
      <div className="col-md-5 mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Name</label>
    <input type="text" className="form-control" id="namne" name= "name"/>
  </div>
  <div className="col-md-5 mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="email" name = "email" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="col-md-5 mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="password" name='password'/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary" >Submit</button>
</form>
    </div>
  )
}

export default Signup
