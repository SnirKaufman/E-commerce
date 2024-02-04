import { Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login-container">
      <h1 className="login_title">Login</h1>

      <form className="login_form_container">
        <TextField id="outlined-basic" variant="outlined" label="Email" />
        <TextField id="outlined-basic" variant="outlined" label="Password" />

        <Button className="login_btn" variant="contained">
          Sign In
        </Button>
      </form>
      <p>
        Not registered yet?{" "}
        <Link to={"/auth/register"} className="sign-up_btn">
          Sign up
        </Link>
      </p>
    </div>
  );
}

export default Login;
