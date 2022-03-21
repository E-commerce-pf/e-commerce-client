import axios from "axios";

<<<<<<< HEAD
const baseUrl = "/api/product/all";
=======
const baseUrl = "/api/product/";
>>>>>>> 42bc09cc9f6e47f75d0b4ae2415b2c55721060df

const getAllProducts = async () => {
  return (await axios.get(`${baseUrl}/all`)).data;
};

const productsService = {
  getAllProducts,
};

export default productsService;
