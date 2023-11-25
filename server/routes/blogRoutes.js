const express = require('express');
const router = express.Router();
const BlogController = require('../controllers/BlogController');

// helper function
function requireAuth(req,res,next){
    if(!req.isAuthenticated())
    {
        return res.redirect('/login')
    }
    next();
}

router.get('/', BlogController.DisplayBlogPostList);
router.get('/add', BlogController.AddBlogPost);
router.post('/add', BlogController.ProcessBlogPost);
router.get('/edit/:id', BlogController.EditBlogPost);
router.post('/edit/:id', BlogController.ProcessEditBlogPost);
router.get('/delete/:id', BlogController.DeleteBlogPost);

/*
router.get('/', BlogController.DisplayBlogPostList);
router.get('/add', requireAuth, BlogController.AddBlogPost);
router.post('/add', requireAuth, BlogController.ProcessBlogPost);
router.get('/edit/:id', requireAuth, BlogController.EditBlogPost);
router.post('/edit/:id', requireAuth, BlogController.ProcessEditBlogPost);
router.get('/delete/:id', requireAuth, BlogController.DeleteBlogPost);
*/

module.exports = router;
