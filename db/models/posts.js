const { Sequelize, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Post = sequelize.define('Posts', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        authorId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Users',
                key: 'id'
            }
        },
        productId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Products',
                key: 'id'
            }},
        title: DataTypes.STRING,
        content: DataTypes.STRING,
        imageUrl: DataTypes.STRING,
    });



    return Post;
}