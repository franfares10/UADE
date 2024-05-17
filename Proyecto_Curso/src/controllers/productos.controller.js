const ProductosService = require("../services/productos.service");
const AuthService = require("../services/auth.service");

class ProductosController {

  async getProducts(req, res) {
    try {
      const products = await ProductosService.getProducts();
      return res.status(200).json(products);
    } catch (err) {
      console.error(err);
      return res.status(500).json({
        method: "getProducts",
        message: err,
      });
    }
  }

  async getProductById(req, res) {
    try {
      const id = req.params.id;
      let product = await ProductosService.getProductById(id);
      if (!product) {
        return res.status(404).json({
          method: "getProductById",
          message: "Not Found",
        });
      }
      return res.status(200).json(product);
    } catch (err) {
      console.error(err);
      return res.status(500).json({
        method: "getProductById",
        message: err,
      });
    }
  }

  async getProductByCategory(req, res) {
    try {
      const cat = req.params.cat;
      let product = await ProductosService.getProductByCategory(cat);
      return res.status(200).json(product);
    } catch (err) {
      console.error(err);
      return res.status(500).json({
        method: "getProductByCategory",
        message: err,
      });
    }
  }

  async createProduct(req, res) {
    try {
      const { product } = req.body;
      let isRegistered = await ProductosService.isProductRegistered(
        product.descripcion
      );
      if (!isRegistered) {
        let newProduct = await ProductosService.createProduct(product);

        return res.status(201).json({
          message: "Created!",
          product: newProduct,
        });
      }
      return res.status(400).json({
        message: "The product is already registered",
      });
    } catch (err) {
      console.error(err);
      return res.status(500).json({
        method: "createProduct",
        message: err.message,
      });
    }
  }

  async updateProduct(req, res) {
    try {
      let product = await ProductosService.getProductById(req.params.id);
      if (!product) {
        return res
          .status(404)
          .json({ method: "updateProduct", message: "Not Found" });
      }
      const modifiedProduct = await ProductosService.updateProduct(
        req.params.id,
        req.body,
        product
      );
      return res.status(200).json(modifiedProduct);
    } catch (err) {
      console.error(err);
      return res.status(500).json({
        method: "updateProduct",
        message: err,
      });
    }
  }

  async deleteProduct(req, res) {
    try {
      let isProduct = await ProductosService.getProductById(req.params.id);
      if (isProduct) {
        await ProductosService.deleteProduct(req.params.id);
        return res.status(204).json({ message: "No Content" });
      }
      return res.status(404).json({ message: "Not Found" });
    } catch (err) {
      console.error(err);
      return res.status(500).json({
        method: "deleteProduct",
        message: err,
      });
    }
  }
}

module.exports = new ProductosController();
