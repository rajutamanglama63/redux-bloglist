import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div>
      <h2>signup</h2>
      <form>
        <form>
          <p>
            name: <input id="username" type="text" />
          </p>
          <p>
            username: <input id="password" type="text" />
          </p>
          <p>
            password: <input id="password" type="text" />
          </p>
          <button type="submit">signup</button>
          <p>
            Already registered?<Link to="/login"> login</Link>
          </p>
        </form>
      </form>
    </div>
  );
};

export default Signup;
