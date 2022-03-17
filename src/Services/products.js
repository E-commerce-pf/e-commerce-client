import axios from "axios";

const getAllProducts = async () => {
  return (await axios.get("/products")).data;
};

//falta crear ruta en el back
const createProduct = async (product) => {
  await axios.post("/product", product);
};

const productsService = {
  getAllProducts,
};

export default productsService;
