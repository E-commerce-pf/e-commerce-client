import axios from "axios";

const baseUrl = "/api/product";

const getAllProducts = async () => {
  return (await axios.get(`${baseUrl}`)).data;
};

//falta crear ruta en el back
const createProduct = async (product) => {
  await axios.post(baseUrl, product);
};

const productsService = {
  getAllProducts,
  createProduct,
};

export default productsService;
