import { Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="register-container">
      <h1 className="register_title">Register</h1>

      <form className="register_form_container">
        <div className="name-container">
          <TextField
            className="first-name"
            id="outlined-basic"
            variant="outlined"
            label="First Name"
          />
          <TextField
            id="outlined-basic"
            variant="outlined"
            label="Last Name"
            className="first-name"
          />
        </div>
        <TextField id="outlined-basic" variant="outlined" label="Email" />
        <TextField id="outlined-basic" variant="outlined" label="Password" />

        <Button className="register_btn" variant="contained">
          Sign Up
        </Button>
      </form>
      <p>
        Already have an account ?
        <Link to={"/auth/login"} className="sign-up_btn">
          Login
        </Link>
      </p>
    </div>
  );
}

export default Register;
