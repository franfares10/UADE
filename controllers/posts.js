const MailService = require('../services/mail');
const PostService = require('../services/posts');
const CloudinaryService = require('../services/cloudinary');

const getPosts = async (req, res) => {
    try{
        const posts = await PostService.getPosts();
        res.status(200).json(posts);
    }
    catch(err){
        res.status(500).json({message: err.message});
    }
};

const createPost = async (req, res) => {
    const fileBuffer = req.file.buffer;
    try{
        const urlImg = await CloudinaryService.uploadImage(fileBuffer);
        const post = await PostService.createPost({...req.body, imageUrl: urlImg});
        const aggregatedPost = await PostService.getPostById(post.id);

        await MailService.sendMail(
            aggregatedPost.author.email,
            'New post created',
            `Your post ${aggregatedPost.title} has been created successfully!`)
        res.status(200).json(aggregatedPost);
    }
    catch(err){
        res.status(500).json({message: err.message});
    }
};

module.exports = {
    getPosts,
    createPost,
};