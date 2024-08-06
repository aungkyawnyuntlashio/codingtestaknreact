import React from "react";
import { loginService } from "../services/login.service";

function Login() {
  const onLoginPress = async (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    const res = await loginService({username, password});
    console.log(res)
    localStorage.setItem("codingtesttoken", "");
  };
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <h1>Login</h1>
      <form onSubmit={onLoginPress}>
        <input id="username" type="text" placeholder="Username" />
        <input id="password" type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
