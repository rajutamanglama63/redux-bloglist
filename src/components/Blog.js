import { useSelector } from "react-redux";

const Blog = () => {
  const blogs = useSelector((state) => state.blog);

  return (
    <div>
      <h2>blogs</h2>
      {blogs.map((blog) => (
        <div key={blog.id}>
          <div>
            {blog.title} {blog.author}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blog;
