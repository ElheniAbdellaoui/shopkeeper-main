const Product = require('../models/Product');

// get all the porducts
exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find().sort({date: -1});
    res.send(products);
  } catch (error) {
    res.status(500).json({errors: error.message});
  }
};

//get a product by its id
exports.getOneProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.send(product);
  } catch (error) {
    res.status(500).json({errors: error.message});
  }
};

// add products
exports.addProducts = async (req, res) => {
  try {
    const newProduct = await new Product(req.body);
    newProduct.save();
    res.send(newProduct);
  } catch (error) {
    res.status(500).json({errors: error.message});
  }
};

// delete products
exports.deleteProducts = async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    res.send({msg: `${deletedProduct.title} was successfully deleted`});
  } catch (error) {
    res.status(500).json({errors: error.message});
  }
};

// modify products
exports.editProducts = async (req, res) => {
  try {
    const editedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {...req.body},
      {new: true}
    );
    // res.json({msg: `${editedProduct.title} was successfully edited`});
    res.send(editedProduct);
  } catch (error) {
    res.status(500).json({errors: error.message});
  }
};
