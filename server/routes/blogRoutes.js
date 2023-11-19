const express = require('express');
const router = express.Router();
const BlogController = require('../controllers/BlogController');

router.get('/', BlogController.DisplayBlogPostList);
router.get('/add', BlogController.AddBlogPost);
router.post('/add', BlogController.ProcessBlogPost);
router.get('/edit/:id', BlogController.EditBlogPost);
router.post('/edit/:id', BlogController.ProcessEditBlogPost);
router.get('/delete/:id', BlogController.DeleteBlogPost);

module.exports = router;
