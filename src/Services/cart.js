import axios from "axios";

const getCart = async (userId) => {
  return (await axios.get(`/api/cart/${userId}`)).data;
};

const removeAll = async (userId) => {
  return (await axios.put(`/api/cart/all`, { userId })).data;
};

const addToCart = async (userId, productId) => {
  return (await axios.put(`/api/cart/${productId}`, { userId })).data;
};

const cartService = {
  getCart,
  removeAll,
  addToCart,
};

export default cartService;
