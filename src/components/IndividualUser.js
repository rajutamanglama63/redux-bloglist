import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../reducers/userReducer";

const IndividualUser = () => {
  const individualUser = useSelector((state) => {
    console.log(state);
  });
  // console.log(individualUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);
  return (
    <div>
      <h2>{individualUser.name}</h2>
      <h4>added blogs</h4>

      <ul>
        {individualUser.blogs.map((blog) => (
          <li key={blog.id}>{blog.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default IndividualUser;
