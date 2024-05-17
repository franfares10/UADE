const mongoose = require('mongoose');

const ProductosSchema = new mongoose.Schema({
    descripcion:String,
    categoria:String,
    precio_unitario:Number,
    url_img:String
});

const Productos = mongoose.model('Productos',ProductosSchema);

module.exports = Productos;