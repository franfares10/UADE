const { Router } = require('express');
const PostController = require('../controllers/posts');
const multer = require('multer');

const router = Router();
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

//http://localhost:8080/api/posts

router.get('/', PostController.getPosts);
router.post('/',
    upload.single('file'),
    PostController.createPost);

//router.put('/:id', PostController.updatePost);

module.exports = router;