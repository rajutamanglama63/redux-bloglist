import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const NavigationLink = () => {
  const loggedUser = useSelector((state) => state.loggedUser);
  const padding = {
    paddingRight: 5,
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
          <button>logout</button>
        </li>
      </ul>
    </div>
  );
};

export default NavigationLink;
