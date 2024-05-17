const { Sequelize, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Product = sequelize.define('Products', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        description: DataTypes.STRING,
        price: DataTypes.INTEGER,
    });



    return Product;
}