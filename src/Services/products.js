import axios from "axios";

const getAllProducts = async () => {
  return (await axios.get("/products")).data;
};

const productsService = {
  getAllProducts,
};

export default productsService;
