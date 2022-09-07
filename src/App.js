import { useEffect } from "react";
import Blog from "./components/Blog";
import { useDispatch } from "react-redux";
import { initializeBlogs } from "./reducers/blogReducer";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeBlogs());
  }, [dispatch]);

  return (
    <div>
      <h2>blogs</h2>
      <Blog />
    </div>
  );
};

export default App;
