const express = require('express');
const router = express.Router();
const BlogController = require('../controllers/BlogController');

// Helper function for route authentication
function requireAuth(req, res, next) {
    if (!req.isAuthenticated()) {
        return res.redirect('/login'); // Redirect to login if the user is not authenticated
    }
    next();
}

// Define routes and associate them with controller methods
router.get('/', BlogController.DisplayBlogPostList); // Display a list of blog posts
router.get('/add', requireAuth, BlogController.AddBlogPost); // Display the form to add a new blog post (requires authentication)
router.post('/add', requireAuth, BlogController.ProcessBlogPost); // Process the submission of a new blog post (requires authentication)
router.get('/edit/:id', requireAuth, BlogController.EditBlogPost); // Display the form to edit a blog post (requires authentication)
router.post('/edit/:id', requireAuth, BlogController.ProcessEditBlogPost); // Process the submission to edit a blog post (requires authentication)
router.get('/delete/:id', requireAuth, BlogController.DeleteBlogPost); // Delete a blog post (requires authentication)

module.exports = router; // Export the configured router
