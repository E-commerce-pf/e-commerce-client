function validateProduct(input) {
  const errors = {};
  if (!input.name) {
    errors.name = "this field is required";
  }

  if (!input.lastName) {
    errors.lastName = "this field is required";
  }

  if (input.categories.length <= 0) {
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
