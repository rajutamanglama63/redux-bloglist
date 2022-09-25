import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "../reducers/loginReducer";

const NavigationLink = () => {
  const loggedUser = useSelector((state) => state.loggedUser);
  const dispatch = useDispatch();
  const padding = {
    paddingRight: 5,
  };

  const logoutHandler = () => {
    window.localStorage.removeItem("loggedInUser");
    dispatch(userLogout());
    // console.log("clicked");
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
