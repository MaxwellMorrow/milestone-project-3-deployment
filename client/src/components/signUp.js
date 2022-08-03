import "../styleSheets/index.css";
import { Link } from "react-router-dom";


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
      <select name="dropdown" class="dropdown">
        <option value="Role" selected>
          Not a Manager
        </option>
        <option value="Java">Manager</option>
      </select>

      <Link to="/construction" class="styledButton">
          Sign Up
      </Link>
    </div>
  );
}
export default SignUp;
