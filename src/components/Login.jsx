
import React from "react";
import Input from "./Input";


function Login(props) {
  return (
    <form className="form">
      <Input inputType="text" placeholder="Username" />
      <Input inputType="password" placeholder="Password" />
      {!props.userIsRegistered && <Input inputType="password" placeholder="Confirm Password" />}
      <button type="submit">
        {props.userIsRegistered ? "Login" : "Register"}
      </button>
    </form>);
}

export default Login;