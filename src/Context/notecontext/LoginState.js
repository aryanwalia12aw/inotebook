import { useState, useContext } from "react";
import noteContext from "./NoteContext";

const LoginState = (props) => {

    const [credential , setCredential] = useState({email : "" , password : ""})
  const host = "http://localhost:5000";

  const signup = async (credential)=>{
    const response = await fetch(`${host}/api/auth/createuser/`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        //   "auth-token":
        //     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRlYzEzZWZmMmE2YzdkYjRkYjdiODBlIn0sImlhdCI6MTY5MzE5MzI2M30.wbnyGtT2XRvtTZ44KTIywPx3b2GuhSvQ0yhGP3GIwHE",
        },
        body: JSON.stringify({name : credential.name, email : credential.email , password : credential.password}) 
      });
      const json = await response.json();
      console.log(json);
      setCredential(json);
  }
//   const login = async (credential)=>{
//     const response = await fetch(`${host}/api/auth/login/`, {
//         method: "post",
//         headers: {
//           "Content-Type": "application/json",
//         //   "auth-token":
//         //     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRlYzEzZWZmMmE2YzdkYjRkYjdiODBlIn0sImlhdCI6MTY5MzE5MzI2M30.wbnyGtT2XRvtTZ44KTIywPx3b2GuhSvQ0yhGP3GIwHE",
//         },
//         body: JSON.stringify({email : credential.email , password : credential.password}) 
//       });
//       const json = await response.json();
//       console.log(json);
//       setCredential(json);
//   }

  return (
    <div>
      <noteContext.Provider
    //   value= {{login ,signup}}
    >
      {props.children}
    </noteContext.Provider>
    </div>
  )
}

export default LoginState
