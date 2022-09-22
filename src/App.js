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
        <Route path="/users" element={<Users />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/individualUser/:id" element={<IndividualUser />} />
      </Routes>
      {/* <Login /> */}
    </div>
  );
};

export default App;
