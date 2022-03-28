import axios from "axios";

const getCart = async (id) => {
  return (await axios.get(`/api/cart/${id}`)).data;
};

const cartService = {
  getCart,
};

export default cartService;
