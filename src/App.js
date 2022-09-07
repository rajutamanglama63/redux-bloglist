import { useEffect } from "react";
import Blog from "./components/Blog";
import { useDispatch } from "react-redux";
import { initializeBlogs } from "./reducers/blogReducer";
import Login from "./components/Login";
import Users from "./components/Users";
import { getAllUsers } from "./reducers/userReducer";
import NavigationLink from "./components/NavigationLink";
import { Route, Routes } from "react-router-dom";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeBlogs());
    dispatch(getAllUsers());
  }, [dispatch]);

  return (
    <div>
      <NavigationLink />

      <Routes>
        <Route path="/blogs" element={<Blog />} />
        <Route path="/users" element={<Users />} />
      </Routes>
      {/* <Login /> */}
    </div>
  );
};

export default App;
