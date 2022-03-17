export const addToLocalStorageIds = (ids) => {
  localStorage.setItem("shoppingBag", JSON.stringify(ids));
};

export const getToLocalStorageIds = () => {
  return JSON.parse(localStorage.getItem("shoppingBag") || "[]");
};
