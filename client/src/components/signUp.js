import "../styleSheets/index.css";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import { json } from "sequelize/types";
import {useNavigate} from "react-router-dom"
function SignUp() {

  let navigate = useNavigate();

  const [user,setUser] = useState({
    email:"",
    firstname:"",
    lastname:"",
    passworddigest:"",
    roles:"viewer"
  })

  async function handleSubmit(e){
    e.preventDefault()

    await fetch("/auth/register",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:json.stringify(user)

    })
    navigate("/inventory");
  }


  return (
    <div class="entry">
      <div class="welcomeContainer">
        <h2>Register Here!</h2>
      </div>
      <label for="fname">First Name</label>
      <input
        class="input"
        type="text"
        placeholder="First Name"
        required
        value={user.firstName}
        onChange={(e) => setUser({ ...user, firstname: e.target.value })}
      ></input>
      <label for="lname">Last Name</label>
      <input
        class="input"
        type="text"
        placeholder="Last Name"
        required
        value={user.lastName}
        onChange={(e) => setUser({ ...user, lastname: e.target.value })}
      ></input>
      <label for="user">Email</label>
      <input
        class="input"
        type="text"
        placeholder="Email Address"
        required
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
      ></input>
      <label for="pass">Password</label>
      <input
        class="input"
        type="password"
        placeholder="Enter Password"
        required
        value={user.password}
        onChange={(e) => setUser({ ...user, passworddigest: e.target.value })}
      ></input>
      <select name="dropdown" class="dropdown">
        <option value="Role" selected>
          Not a Manager
        </option>
        <option value="Java">Manager</option>
      </select>

      <Link to="" class="styledButton" onClick={() => handleSubmit}>
        Sign Up
      </Link>
    </div>
  );
}
export default SignUp;
