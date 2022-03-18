export function validateProduct(input) {
  const errors = {};
  if (!input.name) {
    errors.name = "this field is required";
  }

  if (!input.lastName) {
    errors.lastName = "this field is required";
  }

  if (!input.images.length > 0) {
    errors.images = "The product needs at least one image";
  } else if (isValidURL(input.images)) {
    errors.images = "This Url is not valid";
  }

  if (!input.categories.length > 0) {
    errors.categories = "Choose at least one category";
  }

  if (!input.description) {
    errors.description = "This field is required";
  }

  if (!input.price) {
    errors.price = "this field is required";
  }

  if (!input.stock) {
    errors.stock = "this field is required";
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
