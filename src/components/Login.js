import React, { useContext, useEffect ,useState } from 'react'
import noteContext from "../Context/notecontext/NoteContext";
// import { useNavigate } from 'react-router-dom'

const Login = (props) => {

  
    // let navigate =   useNavigate();
    const [credential , setCredential] = useState({email : "" , password : ""})
    const context = useContext(noteContext);
    const { login } = context;
    const host = "http://localhost:5000";

    const onChange = (event)=>{
        setCredential({...credential, [event.target.name]: event.target.value})
        // setCredential({email : credential.email , passwrod : credential.password})
        console.log (setCredential)
    }
   const loginClick = async(credential)=>{
//   login(e.email , e.password)
setCredential({email : credential.email , passwrod : credential.password})
        console.log (setCredential)
// setCredential({email : credential.email , password: credential.password })
credential.preventDefault();
  const response = await fetch(`${host}/api/auth/login/`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    //   "auth-token":
    //     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRlYzEzZWZmMmE2YzdkYjRkYjdiODBlIn0sImlhdCI6MTY5MzE5MzI2M30.wbnyGtT2XRvtTZ44KTIywPx3b2GuhSvQ0yhGP3GIwHE",
    },
    body: JSON.stringify({email : credential.email  , password : credential.password  }) 
  });
  const json = await response.json();
  console.log(json);
  // setCredential(json);
  // if (json.success){
    // Save the auth token and redirect
    // localStorage.setItem('token', json.authtoken); 
    // navigate.push("/");

}
// else{
    // alert("Invalid credentials");
// }

  return (
    <div id='login' className='container mx-1'  >
      <form onChange={onChange}>
  <div className="container col-md-5">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="email" onChange={onChange}  aria-describedby="emailHelp"/>
    <div id="email" className="form-text" name = "email">We'll never share your email with anyone else.</div>
  </div>
  <div className="container col-md-5">
    <label for="exampleInputPassword1" className="form-label" >Password</label>
    <input type="password" className="form-control" id="password" name = "password" onChange={onChange}  />
  </div>
  <div className="container col-md-5">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <div className='container col-md-5'>
  <button type="submit" className="btn btn-primary " onClick={loginClick}>Submit</button>
  </div>
</form>
      

    </div>

  )
}

export default Login
