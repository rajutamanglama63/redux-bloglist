import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../reducers/userReducer";

const IndividualUser = () => {
  const individualUser = useSelector((state) => state.individualUser);
  console.log(individualUser);
  const dispatch = useDispatch();

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
