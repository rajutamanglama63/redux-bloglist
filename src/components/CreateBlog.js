import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createNewBlog } from "../reducers/blogReducer";

const CreateBlog = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [newBlog, setNewBlog] = useState({
    title: "",
    author: "",
    url: "",
  });

  const createBlogHandler = (e) => {
    e.preventDefault();
    dispatch(createNewBlog(newBlog));
    setNewBlog({
      title: "",
      author: "",
      url: "",
    });
    navigate("/blogs");
  };
  return (
    <div>
      <h2>Create new</h2>
      <form onSubmit={createBlogHandler}>
        <p>
          title:{" "}
          <input
            type="text"
            value={newBlog.title}
            onChange={(e) => setNewBlog({ ...newBlog, title: e.target.value })}
          />
        </p>
        <p>
          author:{" "}
          <input
            type="text"
            value={newBlog.author}
            onChange={(e) => setNewBlog({ ...newBlog, author: e.target.value })}
          />
        </p>

        <p>
          url:{" "}
          <input
            type="text"
            value={newBlog.url}
            onChange={(e) => setNewBlog({ ...newBlog, url: e.target.value })}
          />
        </p>
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default CreateBlog;
