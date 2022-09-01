const getProducts = (req, res) => {
  res.status(200).send("Get All Products");
};

const createProduct = (req, res) => {
  res.status(200).send("Product has been created");
};

const updateProduct = (req, res) => {
  res.status(200).send("Product has been updated");
};

const deleteProduct = (req, res) => {
  res.status(200).send("Get All Products");
};

module.exports = {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
};
