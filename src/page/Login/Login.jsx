import React, { useState } from "react";
import "../Login/login.scss";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/crystales.png";

const Login = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const [loggingIn, setLoggingIn] = useState(false);

  const handlelogin = () => {
    setLoggingIn(true);
    if (username && password) {
      console.log("Login Successful");
      navigate("/Landing");
    }
  };

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="login">
      <div className="login__form-wrapper">
        <img src={logo} className="login__logo" />
        <h2 className="login__title">Login</h2>
        <div className="login__formbox">
          <input
            type="text"
            placeholder="username"
            className="login__textfield login__textfield--username"
            onChange={handleUsername}
          />
          {!username && loggingIn && (
            <p className="login__helpertext--error">Username is required</p>
          )}
          <input
            type="password"
            placeholder="password"
            className="login__textfield login__textfield--password"
            onChange={handlePassword}
          />
          {!password && loggingIn && (
            <p className="login__helpertext--error">Password is required</p>
          )}
          <button onClick={handlelogin} className="login__button">
            Log in
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
