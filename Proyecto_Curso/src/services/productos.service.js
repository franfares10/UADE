const ProductosModel = require("../models/Productos");

class ProductosService {
  async getProducts() {
    try {
      const products = await ProductosModel.find();
      return products;
    } catch (err) {
      console.error(err);
      throw new Error("Error in getProducts Service");
    }
  }

  async getProductById(id) {
    try {
      let product = await ProductosModel.findOne({_id:id});
      return product;
    } catch (err) {
      console.error(err);
      throw new Error("Error in getProductsById Service");
    }
  }

  async getProductByCategory(cat) {
    try {
      let product = await ProductosModel.find({ categoria: cat });
      return product;
    } catch (err) {
      console.error(err);
      throw new Error("Error in getProductsByCategory Service");
    }
  }

  async isProductRegistered(descripcion) {
    try {
      let product = await ProductosModel.exists({ descripcion });
      if(product){
        return true;
      }
      return false;
    } catch (err) {
      console.error(err);
      throw new Error("Error in getProductsByCategory Service");
    }
  }

  async createProduct(product) {
    try {
      let savedProduct = await ProductosModel.create(product);
      return savedProduct;
    
    } catch (err) {
      console.error(err);
      throw new Error("Error in createProduct Service",err);
    }
  }

  async updateProduct(id, fields, product) {
    try {
      fields.descripcion ? product.descripcion = fields.descripcion : false;
      fields.categoria ? product.categoria = fields.categoria : false;
      fields.precio_unitario ? product.precio_unitario = fields.precio_unitario : false;
      fields.url_img ? product.url_img = fields.url_img : false;

      await ProductosModel.findOneAndUpdate({_id:id}, product);
      return product;
    } catch (err) {
      console.error(err);
      throw new Error("Error in updateProduct Service");
    }
  }

  async deleteProduct(id) {
    try {
      await ProductosModel.findOneAndDelete({_id:id});
    } catch (err) {
      console.error(err);
      throw new Error("Error in delete Service");
    }
  }
}

module.exports = new ProductosService();
