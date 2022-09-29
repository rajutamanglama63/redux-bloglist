import axios from "axios";
const baseUrl = "/api/comments";

const getAllComments = (id) => {
  const request = axios.get(`${baseUrl}/${id}`);
  return request.then((response) => response.data);
};

const postComment = async (newComment) => {
  const config = {
    headers: { "Content-Type": "application/json" },
  };
  const request = axios.post(baseUrl, newComment, config);
  return request.then((response) => response.data);
};

export default { getAllComments, postComment };
