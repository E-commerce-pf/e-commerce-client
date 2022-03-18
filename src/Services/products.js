import axios from "axios";

const baseUrl = "/api/product";

const getAllProducts = async () => {
  return (await axios.get(baseUrl)).data;
};

const productsService = {
  getAllProducts,
};

export default productsService;
