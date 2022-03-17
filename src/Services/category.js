import axios from "axios";

const getAllCategories = async () => {
  return (await axios.get("/products/categories")).data;
};

const categoriesService = {
  getAllCategories,
};

export default categoriesService;
