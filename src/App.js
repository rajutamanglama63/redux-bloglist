import { useEffect } from "react";
import Blog from "./components/Blog";
import { useDispatch } from "react-redux";
import { initializeBlogs } from "./reducers/blogReducer";
import Login from "./components/Login";
import Users from "./components/Users";
import { getAllUsers } from "./reducers/userReducer";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeBlogs());
    dispatch(getAllUsers());
  }, [dispatch]);

  return (
    <div>
      <h2>blogs</h2>
      <Login />
      <Users />
      <Blog />
    </div>
  );
};

export default App;
