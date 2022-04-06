import axios from "axios";

const baseUrl = "/api/newletter";

const registerToNewletter = async (email) => {
  return (await axios.post(baseUrl, { email })).data;
};

const removeToNewletter = async (id) => {
  return (await axios.delete(`${baseUrl}/${id}`)).data;
};

const newletterService = {
  registerToNewletter,
  removeToNewletter,
};

export default newletterService;
