const Product = require("./../models/productModel");

// ALL CONTROLLERS

// FOR GETTING ALL THE PRODUCTS
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();

    res.status(200).json({
      status: "success",
      data: {
        product: products,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      Message: err,
    });
  }
};

// FOR CREATING NEW PRODUCT
exports.createProduct = async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        product: newProduct,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      Message: err,
    });
  }
};

// FOR GETTING ONE PRODUCT
exports.getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        product: product,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      Message: err,
    });
  }
};

// FOR UPDATING PRODUCT
exports.updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      status: "success",
      data: {
        product: product,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      Message: err,
    });
  }
};

// FOR DELETING PRODUCT
exports.deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);

    res.status(204).json({
      status: "success",
      data: {
        message: "product deleted",
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: "Invalid data sent",
    });
  }
};
