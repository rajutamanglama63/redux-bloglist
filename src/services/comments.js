import axios from "axios";
const baseUrl = "/api/comments";

const getAllComments = (id) => {
  const request = axios.get(`${baseUrl}/${id}`);
  console.log(request);
  return request.then((response) => response.data);
};

const postComment = async (newComment, id) => {
  const config = {
    headers: { "Content-Type": "application/json" },
  };
  const request = await axios.post(`${baseUrl}/${id}`, newComment, config);
  // return request.then((response) => response.data);
  console.log(request);
  return request.data;
};

export default { getAllComments, postComment };
