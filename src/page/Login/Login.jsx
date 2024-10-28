import React, { useState } from "react";
import "./styles/Login.css";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const [loggingIn, setLoggingIn] = useState(false);

  const handlelogin = () => {
    setLoggingIn(true);
    if (username && password) {
      console.log("Login Successful");
      navigate("/");
    }
  };

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="container">
      <div className="formwrappermain">
        <div className="formwrapper">
          <h2 className="login_title">Login</h2>
          <div className="formbox">
            <input
              type="text"
              placeholder="username"
              onChange={handleUsername}
            />
            {!username && loggingIn && <p>username is required</p>}

            <input
              type="password"
              placeholder="password"
              onChange={handlePassword}
            />
            {!password && loggingIn && <p>password is required</p>}
            <button onClick={handlelogin}>Log in</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
