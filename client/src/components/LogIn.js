import '../styleSheets/index.css';
import React from "react";
import { useContext, useState } from "react";
import { CurrentUser } from "../contexts/CurrentUser";
import { useNavigate, Link } from "react-router-dom";

function LogIn() {
  let navigate = useNavigate();
  function redirectingredients() {
    navigate("/ingredients");
  }


  // uncomment when usecontext is working
  // const { setCurrentUser } = useContext(CurrentUser);

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });


  // submit function send token to backend if its in local storage
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      console.log("sending!");
      console.log(JSON.stringify(credentials));
      const response = await fetch("/auth/login", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(credentials),
      });
      const parseRes = await response.json();

      if (parseRes.jwtToken) {
        localStorage.setItem("token", parseRes.jwtToken);
      } else {
        console.log("no token!");
      }
    } catch (err) {
      console.error(err.message);
    }
  }

  return (
    <div class="entry">
      <div class="welcomeContainer">
        <h2>Welcome</h2>
      </div>
      <label for="user">Username</label>
      <input
        class="input first"
        type="text"
        placeholder="Enter Username"
        required
        value={credentials.email}
        onChange={(e) =>
          setCredentials({ ...credentials, email: e.target.value })
        }
      ></input>

      <label for="pass">Password</label>
      <input
        class="input second"
        type="text"
        placeholder="Enter Password"
        required
        value={credentials.password}
        onChange={(e) =>
          setCredentials({ ...credentials, password: e.target.value })
        }
      ></input>

      <Link to="/construction" class="styledButton" onClick={handleSubmit}>
        Login
      </Link>

      <div class="rememberBox">
        <input type="checkbox"></input>
        <label for="remeber">&nbsp; Remember Me</label>
      </div>

      <Link to="/construction" class="styledButton">
        Forgot Password
      </Link>

      <Link to="/signUp" class="styledButton">
        Sign Up
      </Link>
    </div>
  );
}

export default LogIn;
