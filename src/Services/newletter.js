import axios from "axios";

const registerToNewletter = async (email) => {
  return (await axios.post("/api/newsletter", { email })).data;
};

const removeToNewletter = async (id) => {
  return (await axios.delete(`/api/newsletter/${id}`)).data;
};

const newletterService = {
  registerToNewletter,
  removeToNewletter,
};

export default newletterService;
