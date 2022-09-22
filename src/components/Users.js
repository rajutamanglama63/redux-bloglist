import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getIndividualUser } from "../reducers/individualUserReducer";

const Users = () => {
  const allUsers = useSelector((state) => state.allUser);

  // console.log(allUsers);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const individualUserNavigator = (id) => {
    dispatch(getIndividualUser(id));
    navigate(`/individualUser/${id}`);
  };
  return (
    <div>
      <h2>Users</h2>
      <table>
        <tbody>
          <tr>
            <th></th>
            <th>blogs created</th>
          </tr>
          {allUsers.map((user) => (
            <tr key={user.id}>
              <td onClick={() => individualUserNavigator(user.id)}>
                {user.name}
              </td>
              <td>{user.blogs.length}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
