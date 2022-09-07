import React from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h2>Welcome to my Blog App!</h2>
      <p>Please log in to process forward.</p>
      <div style={{ display: "flex" }}>
        <button
          style={{ marginRight: "10px" }}
          onClick={() => navigate("/login")}
        >
          Login
        </button>
        <button onClick={() => navigate("/signup")}>Signup</button>
      </div>
    </div>
  );
};

export default LandingPage;
