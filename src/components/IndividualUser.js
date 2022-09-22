import React from "react";
import { useSelector } from "react-redux";

const IndividualUser = () => {
  const individualUser = useSelector((state) => state.individualUser);

  return (
    <>
      {individualUser ? (
        <>
          <div>
            <h2>{individualUser.name}</h2>
            <h4>added blogs</h4>

            <ul>
              {individualUser.blogs.map((blog) => (
                <li key={blog.id}>{blog.title}</li>
              ))}
            </ul>
          </div>
        </>
      ) : null}
    </>
  );
};

export default IndividualUser;
