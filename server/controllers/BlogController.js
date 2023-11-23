const BlogPost = require('../models/BlogPost');

const BlogController = {
    DisplayBlogPostList: async (req, res, next) => {
        try {
            const blogPosts = await BlogPost.find();
            res.render('blog/list', {
                title: 'Blog Post List',
                blogPosts: blogPosts,
                displayName: req.user ? req.user.displayName:''
            });
        } catch (err) {
            console.error(err);
            res.render('blog/list', {
                error: 'Error on server'
            });
        }
    },

    AddBlogPost: async (req, res, next) => {
        try {
            res.render('blog/add', {
                title: 'Add Blog Post',
                displayName: req.user ? req.user.displayName:''
            });
        } catch (err) {
            console.error(err);
            res.render('blog/list', {
                error: 'Error on the server'
            });
        }
    },

    ProcessBlogPost: async (req, res, next) => {
        try {
            const newBlogPost = BlogPost({
                "title": req.body.title,
                "content": req.body.content,
            });
            await newBlogPost.save();
            res.redirect('/blog');
        } catch (error) {
            console.error(error);
            res.render('blog/list', {
                error: 'Error on the server'
            });
        }
    },

    EditBlogPost: async (req, res, next) => {
        try {
            const postId = req.params.id;
            const blogPost = await BlogPost.findById(postId);
            if (!blogPost) {
                res.render('error', { error: 'Blog post not found!' });
                return;
            }
            res.render('blog/edit', {
                title: 'Edit Blog Post',
                Blog: blogPost,
                displayName: req.user ? req.user.displayName:''
            });
        } catch (error) {
            console.error(error);
            res.render('blog/list', {
                error: 'Error on the server'
            });
        }
    },

    ProcessEditBlogPost: async (req, res, next) => {
        try {
            const postId = req.params.id;
            const updatedPostData = {
                title: req.body.title,
                content: req.body.content,
            };
            await BlogPost.findByIdAndUpdate(postId, updatedPostData);
            res.redirect('/blog');
        } catch (error) {
            console.error(error);
            res.render('blog/list', {
                error: 'Error on the server'
            });
        }
    },

    DeleteBlogPost: async (req, res, next) => {
        try {
            const postId = req.params.id;
            await BlogPost.findByIdAndDelete(postId);
            res.redirect('/blog');
        } catch (error) {
            console.error(error);
            res.render('blog/list', {
                error: 'Error on the server'
            });
        }
    },
};

module.exports = BlogController;
