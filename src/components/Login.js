import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { userLogin } from "../reducers/loginReducer";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log("logged in with ", username, password);

    try {
      dispatch(userLogin(username, password));
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
      </form>
    </div>
  );
};

export default Login;
