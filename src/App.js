import { useEffect } from "react";
import Blog from "./components/Blog";
import { useDispatch, useSelector } from "react-redux";
import { initializeBlogs } from "./reducers/blogReducer";
import Login from "./components/Login";
import Users from "./components/Users";
import { getAllUsers } from "./reducers/userReducer";
import NavigationLink from "./components/NavigationLink";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Signup from "./components/Signup";
import IndividualUser from "./components/IndividualUser";
import CreateBlog from "./components/CreateBlog";

const App = () => {
  const dispatch = useDispatch();
  const loggedUser = useSelector((state) => state.loggedUser);

  useEffect(() => {
    dispatch(initializeBlogs());
    dispatch(getAllUsers());
  }, [dispatch]);

  return (
    <div>
      {loggedUser !== null ? <NavigationLink /> : null}

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/create" element={<CreateBlog />} />
        <Route
          path="/users"
          element={loggedUser !== null ? <Users /> : <Login />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/individualUser/:id"
          element={loggedUser !== null ? <IndividualUser /> : <Login />}
        />
      </Routes>
      {/* <Login /> */}
    </div>
  );
};

export default App;
