const router = require("express").Router;
const {
  createProduct,
  deleteProduct,
  getProducts,
  updateProduct,
} = require("../controllers/products.controller");

const productRouter = router();

productRouter.get("/", getProducts);
productRouter.post("/", createProduct);
productRouter.delete("/", deleteProduct);
productRouter.patch("/", updateProduct);

module.exports = productRouter;
