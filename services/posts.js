const { User, Product, Post } = require('../db/db');

const postsAttributes = ['id','authorId','productId', 'title', 'content','imageUrl', 'createdAt', 'updatedAt'];

const postsInclude = [
    {
        model: User,
        as: 'author',
        attributes: ['id', 'username', 'email'],
    },
    {
        model: Product,
        as: 'product',
        attributes: ['id', 'description', 'price'],
    },
];

const getPosts = async () => await Post.findAll({ attributes: postsAttributes, include: [
    {
        model: User,
        as: 'author',
        attributes: ['id', 'username', 'email'],
    },
    {
        model: Product,
        as: 'product',
        attributes: ['id', 'description', 'price'],
    },
]});

const createPost = async (post) => await Post.create(post);

const getPostById = async (id) => await Post.findByPk(id, { attributes: postsAttributes, include: postsInclude });

module.exports = {
    getPosts,
    createPost,
    getPostById,
};