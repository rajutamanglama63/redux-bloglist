import React from "react";
import { Link } from "react-router-dom";

const NavigationLink = () => {
  const padding = {
    paddingRight: 5,
  };
  return (
    <div style={{ backgroundColor: "grey" }}>
      {/* <Link to="/" style={padding}>
        blogs
      </Link>
      <Link to="/" style={padding}>
        users
      </Link>
      <span style={padding}>Raju logged in</span>
      <button style={padding}>logout</button> */}

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
        <li style={padding}>Raju logged in</li>
        <li>
          <button>logout</button>
        </li>
      </ul>
    </div>
  );
};

export default NavigationLink;
