import "../styleSheets/index.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function SignUp() {
  let navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    firstname: "",
    lastname: "",
    password: "",
    role: "viewer",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("sending!");
      console.log(JSON.stringify(user));
      const response = await fetch(
        "/auth/register",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(user),
        }
      );
      const parseRes = await response.json();

      if (parseRes.jwtToken) {
        localStorage.setItem("token", parseRes.jwtToken);
      } else {
        console.log("no token!");
      }
    } catch (err) {
      console.error(err.message);
    }
  };

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
        value={user.firstname}
        onChange={(e) => setUser({ ...user, firstname: e.target.value })}
      ></input>
      <label for="lname">Last Name</label>
      <input
        class="input"
        type="text"
        placeholder="Last Name"
        required
        value={user.lastname}
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
        onChange={(e) => setUser({ ...user, password: e.target.value })}
      ></input>
      <select name="dropdown" class="dropdown">
        <option value="Role" selected>
          Not a Manager
        </option>
        <option value="Java">Manager</option>
      </select>

      <Link
        to="/construction"
        class="styledButton"
        onClick={handleSubmit}
      >
        Sign Up
      </Link>
    </div>
  );
}
export default SignUp;
