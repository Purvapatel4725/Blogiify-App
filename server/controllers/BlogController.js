// Importing the BlogPost model
const BlogPost = require('../models/BlogPost');

// BlogController object with various methods
const BlogController = {
    // Method to display a list of blog posts
    DisplayBlogPostList: async (req, res, next) => {
        try {
            // Fetch all blog posts from the database
            const blogPosts = await BlogPost.find();
            
            // Render the 'blog/list' view and pass data to it
            res.render('blog/list', {
                title: 'Blogs',
                blogPosts: blogPosts,
                displayName: req.user ? req.user.displayName : ''
            });
        } catch (err) {
            console.error(err);
            // Render the 'blog/list' view with an error message in case of an error
            res.render('blog/list', {
                error: 'Error on server'
            });
        }
    },

    // Method to render the 'add blog' page
    AddBlogPost: async (req, res, next) => {
        try {
            res.render('blog/add', {
                title: 'Add Blog',
                displayName: req.user ? req.user.displayName : ''
            });
        } catch (err) {
            console.error(err);
            res.render('blog/list', {
                error: 'Error on the server'
            });
        }
    },

    // Method to process the addition of a new blog post
    ProcessBlogPost: async (req, res, next) => {
        try {
            // Create a new BlogPost instance with data from the request
            const newBlogPost = BlogPost({
                "title": req.body.title,
                "content": req.body.content,
            });
            // Save the new blog post to the database
            await newBlogPost.save();
            // Redirect to the blog post list page
            res.redirect('/blog');
        } catch (error) {
            console.error(error);
            res.render('blog/list', {
                error: 'Error on the server'
            });
        }
    },

    // Method to render the 'edit blog' page
    EditBlogPost: async (req, res, next) => {
        try {
            const postId = req.params.id;
            // Find the blog post by ID
            const blogPost = await BlogPost.findById(postId);
            
            // Check if the blog post exists
            if (!blogPost) {
                res.render('error', { error: 'Blog post not found!' });
                return;
            }
            
            // Render the 'blog/edit' view with the data of the blog post
            res.render('blog/edit', {
                title: 'Edit Blog',
                Blog: blogPost,
                displayName: req.user ? req.user.displayName : ''
            });
        } catch (error) {
            console.error(error);
            res.render('blog/list', {
                error: 'Error on the server'
            });
        }
    },

    // Method to process the editing of a blog post
    ProcessEditBlogPost: async (req, res, next) => {
        try {
            const postId = req.params.id;
            // Updated data for the blog post
            const updatedPostData = {
                title: req.body.title,
                content: req.body.content,
            };
            // Find the blog post by ID and update its data
            await BlogPost.findByIdAndUpdate(postId, updatedPostData);
            // Redirect to the blog post list page
            res.redirect('/blog');
        } catch (error) {
            console.error(error);
            res.render('blog/list', {
                error: 'Error on the server'
            });
        }
    },

    // Method to delete a blog post
    DeleteBlogPost: async (req, res, next) => {
        try {
            const postId = req.params.id;
            // Find the blog post by ID and delete it
            await BlogPost.findByIdAndDelete(postId);
            // Redirect to the blog post list page
            res.redirect('/blog');
        } catch (error) {
            console.error(error);
            res.render('blog/list', {
                error: 'Error on the server'
            });
        }
    },
};

// Export the BlogController object
module.exports = BlogController;
