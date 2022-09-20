import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { logoutUser } from "../reducers/loginReducer";

const NavigationLink = () => {
  const loggedUser = useSelector((state) => state.loggedUser);
  const padding = {
    paddingRight: 5,
  };

  const logoutHandler = () => {
    window.localStorage.removeItem("loggedInUser");
    console.log("clicked");
  };
  return (
    <div style={{ backgroundColor: "grey" }}>
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          alignItem: "center",
          padding: "5px",
        }}
      >
        <li style={padding}>
          <Link to="/blogs">blogs</Link>
        </li>
        <li style={padding}>
          <Link to="/users">users</Link>
        </li>
        <li style={padding}>{loggedUser.name} logged in</li>
        <li>
          <button onClick={logoutHandler}>logout</button>
        </li>
      </ul>
    </div>
  );
};

export default NavigationLink;
