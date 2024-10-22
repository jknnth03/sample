import React from "react";
import "./Login.css";
const Login = () => {
  const handlelogin = () => {
    console.log("Login successfully");
  };
  return (
    <div className="container">
      <div className="formwrapper">
        <h2 className="login_title">Login</h2>
        <div className="formbox">
          <input type="text" placeholder="username" />
          <input type="password" placeholder="password" />
          <button onClick={handlelogin}>Log in</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
