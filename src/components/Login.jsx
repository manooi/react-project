
import React from "react";
import Input from "./Input";


function Login(props) {
  return (
    <form className="form">
      <Input inputType="text" placeholder="Username" />
      <Input inputType="password" placeholder="Password" />
      <button type="submit">Login</button>
    </form>);
}

export default Login;