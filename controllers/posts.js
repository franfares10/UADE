const fs = require('fs');
const path = require('path');
const MailService = require('../services/mail');
const PostService = require('../services/posts');
const handlebars = require('handlebars');

const CloudinaryService = require('../services/cloudinary');

const getPosts = async (req, res) => {
    try {
        const posts = await PostService.getPosts();
        res.status(200).json(posts);
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
};

const createPost = async (req, res) => {
    const fileBuffer = req.file.buffer;
    try {
        const urlImg = await CloudinaryService.uploadImage(fileBuffer);
        const post = await PostService.createPost({
            ...req.body,
            imageUrl: urlImg
        });

        const templatePath = path.resolve(__dirname, '../templates/email.template.hbs');
        const aggregatedPost = await PostService.getPostById(post.id);
        const templateSource = fs.readFileSync(templatePath, 'utf8');

        const template = handlebars.compile(templateSource);

        const htmlContent = template({
            title: aggregatedPost.title,
            authorName: aggregatedPost.author.username,
            productName: aggregatedPost.product.description,
            content: aggregatedPost.content,
            imageUrl: aggregatedPost.imageUrl
        });

        await MailService.sendMail(
            aggregatedPost.author.email,
            `Your post ${aggregatedPost.title} has been created successfully!`,
            htmlContent)

        res.status(201).json(aggregatedPost);
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
};

module.exports = {
    getPosts,
    createPost,
};