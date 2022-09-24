import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getSingleBlog } from "../reducers/blogDetailReducer";

import { initializeBlogs } from "../reducers/blogReducer";

const Blog = () => {
  const blogs = useSelector((state) => state.blog);
  // console.log(blogs);
  const loggedUser = useSelector((state) => state.loggedUser);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeBlogs());
  }, [dispatch]);

  const blogDetailNavigator = (id) => {
    dispatch(getSingleBlog(id));
    navigate(`/info/${id}`);
  };

  const blogSytle = {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 2,
    paddingRight: 2,
    border: "solid",
    borderWidth: 3,
    borderRadius: 20,
    borderColor: "grey",
    marginBottom: 5,
    cursor: "pointer",
  };

  return (
    <div>
      {loggedUser === null ? (
        <>
          <p>
            Opps! something went wrong. Please make sure you are logged in
            properly or registered
          </p>
          <p>
            <Link to="/">Go back</Link>
          </p>
        </>
      ) : (
        <>
          <h2>blogs</h2>
          {blogs.map((blog) => (
            <div key={blog.id}>
              <div
                style={blogSytle}
                onClick={() => blogDetailNavigator(blog.id)}
              >
                {blog.title} {blog.author}
              </div>
            </div>
          ))}
          <br />
          <button onClick={() => navigate("/create")}>create</button>
        </>
      )}
    </div>
  );
};

export default Blog;
