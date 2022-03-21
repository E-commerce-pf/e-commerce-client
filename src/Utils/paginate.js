export const Paginate = (arr, page, elemPage) => {
  let numPages = Math.ceil(arr.length / elemPage);
  page = page < 0 ? page * -1 : page;
  page = page % numPages;
  console.log(arr)
  return arr.products?.slice(elemPage * page, elemPage * page + elemPage);
};
