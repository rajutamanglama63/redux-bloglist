import axios from "axios";
const baseUrl = "/api/users";

const login = async (credentials) => {
  const response = await axios.post(`${baseUrl}/login`, credentials);

  return response.data;
};

const allUsers = async () => {
  const response = await axios.get(baseUrl);
  // console.log(response.data);

  return response.data;
};

const individualUser = async (id) => {
  const response = await axios.get(`${baseUrl}/${id}`);
  return response.data;
};

export default { login, allUsers, individualUser };
