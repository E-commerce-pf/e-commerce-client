import axios from "axios";

const getAllCategories = async () => {
  return (await axios.get("/api/category")).data;
};

const categoriesService = {
  getAllCategories,
};

export default categoriesService;
