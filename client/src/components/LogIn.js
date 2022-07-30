import "../App.css";
import React from "react";
import { useContext, useState } from "react";
import { CurrentUser } from "../contexts/CurrentUser";
import { useNavigate } from "react-router-dom";

function LogIn() {


  // something about the commented out code below is breaking this component.


  let navigate = useNavigate();
  function redirectingredients() {
    navigate("/ingredients");
  }

  const { setCurrentUser } = useContext(CurrentUser);

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState(null);

  // submit function send token to backend if its in local storage
  async function handleSubmit(e) {




    const response = await fetch(`/authentication/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });

    const data = await response.json();

    if (response.status === 200) {
      setCurrentUser(data.user);
      localStorage.setItem("token", data.token);
      redirectingredients();
    } else {
      setErrorMessage(data.message);
    }
  }

  return (
    <div class="entry">
      <div class="welcomeContainer">
        <h2>Welcome</h2>
      </div>
      <label for="user">Username</label>
      <input
        class="input"
        type="text"
        placeholder="Enter Username"
        required
      ></input>

      <label for="pass">Password</label>
      <input
        class="input"
        type="text"
        placeholder="Enter Password"
        required
      ></input>

      <button class="styledButton" type="submit">
        Login
      </button>
      <label type="checkbox" checked="checked">
        Remember Me
      </label>

      <button class="styledButton" type="submit">
        Forgot Password
      </button>
      <button class="styledButton" type="submit" a href="./signUp">
        Sign Up
      </button>
    </div>
  );
}

export default LogIn;
