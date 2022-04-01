import axios from "axios";

const getUser = async (id) => {
  return (await axios.get(`/api/users/${id}`)).data;
};

const editUser = async (id, newData) => {
  return (await axios.put(`/api/users/${id}`, newData)).data;
};
const reviewUser = async ( review) => {
  return (await axios.post(`/api/review/`, review)).data;
};
const userService = {
  getUser,
  editUser,
  reviewUser
};

export default userService;
