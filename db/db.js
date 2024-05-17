const {
    Sequelize
} = require('sequelize');
const UserModel = require('./models/users');
const ProductModel = require('./models/products');
const PostModel = require('./models/posts');
const dotenv = require('dotenv');
dotenv.config();

const sequelize = new Sequelize(process.env.DEV_DB_NAME, process.env.DEV_DB_USERNAME, process.env.DEV_DB_PASSWORD, {
    host: 'localhost',
    dialect: 'mysql',
});

const User = UserModel(sequelize, Sequelize);
const Product = ProductModel(sequelize, Sequelize);
const Post = PostModel(sequelize, Sequelize);

User.hasMany(Post, {
    foreignKey: 'authorId',
    sourceKey: 'id',
    onDelete: 'CASCADE'
});
Post.belongsTo(User, {
    foreignKey: 'authorId',
    targetKey: 'id',
    onDelete: 'CASCADE',
    as: 'author'
});

Product.hasMany(Post, {
    foreignKey: 'productId',
    sourceKey: 'id',
    onDelete: 'CASCADE'
});
Post.belongsTo(Product, {
    foreignKey: 'productId',
    targetKey: 'id',
    onDelete: 'CASCADE',
    as: 'product'
});


sequelize.sync()
    .then(() => {
        console.log('Database & tables created!');
    })
    .catch(err => {
        console.log('Error: ', err);
    });

module.exports = {
    sequelize,
    User,
    Product,
    Post,
};