const express = require("express");
const router = express.Router();

// IMPORTING PRODUCT CONTROLLER
const productController = require("./../controllers/productController");


// ALL ROUTERS
router
  .route("/")
  .get(productController.getAllProducts)
  .post(productController.createProduct);

router
  .route("/:id")
  .get(productController.getProduct)
  .patch(productController.updateProduct)
  .delete(productController.deleteProduct);

// EXPORTING ROUTER
module.exports = router;
