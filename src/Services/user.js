import axios from "axios";

const getUser = async (id) => {
  return (await axios.get(`/api/users/${id}`)).data;
};

const editUser = async (id, newData) => {
  return (await axios.put(`/api/users/${id}`, newData)).data;
};

const userService = {
  getUser,
  editUser,
};

export default userService;
