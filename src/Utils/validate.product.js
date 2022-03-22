export function validateProduct(input) {
  const errors = {};
  if (!input.title) {
    errors.title = "This field is required";
  }

  if (!input.images) {
    errors.images = "The product needs at least one image";
  }

  if (!input.categories) {
    errors.categories = "Choose at least one category";
  } else if (input.categories === "categories") {
    errors.categories = "Choose at least one category";
  }

  if (!input.description) {
    errors.description = "This field is required";
  }

  if (!input.price) {
    errors.price = "This field is required";
  } else if (!/^\d+$/.test(input.price)) {
    errors.price = "This input only allows numbers";
  }

  if (!input.stock) {
    errors.stock = "This field is required";
  } else if (!/^\d+$/.test(input.stock)) {
    errors.price = "This input only allows numbers";
  }

  return errors;
}

export function isValidURL(str) {
  var pattern = new RegExp(
    "^(https?:\\/\\/)?" + // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
      "(\\#[-a-z\\d_]*)?$",
    "i"
  ); // fragment locator
  return !!pattern.test(str);
}
