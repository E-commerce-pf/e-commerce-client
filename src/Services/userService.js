import axios from "axios";

const getUser = async (userId) => {
  const response = await axios.get(`/api/users/${userId}`);
  return response.data;
};

const userService = {
  getUser,
};

export default userService;
