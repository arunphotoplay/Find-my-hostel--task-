import React from "react";

import { useNavigate } from "react-router-dom";

import "./Login.css";
function Login() {
  const navigate = useNavigate();

  const [input, setInput] = React.useState({ email: "", password: "" });

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const formSubmitter = (e) => {
    e.preventDefault();

    if (input.email !== "username" || input.password !== "password");

     navigate("/user");
     localStorage.setItem('auth', true)
  };

  return (
    <div className="form-container">
      <div className="header">
        <h1>Login</h1>
      </div>

      <form action="submit" onSubmit={formSubmitter}>
        <div className="input-container">
          <div className="email-input">
            <input
              type="text"
              name="email"
              placeholder="Email"
              onChange={handleChange}
            />
          </div>

          <div className="password-input">
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="forgot-container">
          <a href="index.">Forgot password?</a>
        </div>
        <div className="button-container">
          <button>Log In</button>
        </div>

        <div className="create-account">
          <p>
            Not registered? <a href="#index">Create an Account</a>{" "}
          </p>
        </div>
      </form>
      <div className="background">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}

export default Login;
