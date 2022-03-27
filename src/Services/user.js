import axios from "axios";

const getUser = async (id) => {
  return (await axios.get(`/api/users/${id}`)).data;
};

const userService = {
  getUser,
};

export default userService;
