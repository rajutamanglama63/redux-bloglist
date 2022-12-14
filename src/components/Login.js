import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { userLogin } from "../reducers/loginReducer";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log("logged in with ", username, password);

    try {
      dispatch(userLogin(username, password));
      setUsername("");
      setPassword("");
      navigate("/blogs");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h2>Log in to application</h2>
      <form onSubmit={submitHandler}>
        <p>
          username:{" "}
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </p>
        <p>
          password:{" "}
          <input
            id="password"
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </p>
        <button type="submit">login</button>
        <p>
          Not registered yet?<Link to="/signup"> signup</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
