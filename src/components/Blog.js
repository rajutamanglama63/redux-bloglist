import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Blog = () => {
  const blogs = useSelector((state) => state.blog);
  const loggedUser = useSelector((state) => state.loggedUser);

  const navigate = useNavigate();

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
              <div>
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
