import "./App.css";
import "./logIn";


function SignUp() {
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
      ></input>
      <label for="lname">Last Name</label>
      <input class="input" type="text" placeholder="Last Name" required></input>
      <label for="user">Email</label>
      <input
        class="input"
        type="text"
        placeholder="Email Address"
        required
      ></input>
      <label for="pass">Password</label>
      <input
        class="input"
        type="password"
        placeholder="Enter Password"
        required
      ></input>
      <select name="dropdown">
        <option value="Role" selected>
          Manager
        </option>
        <option value="Java">Not A Manager</option>
      </select>
      <button
        class="styledButton buttonContainer"
        type="submit"
        a
        href="./signUp"
      >
        Sign Up
      </button>
    </div>
  );
}
export default SignUp;
