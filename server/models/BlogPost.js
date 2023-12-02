// Importing the Mongoose library
const mongoose = require('mongoose');

// Defining the schema for a blog post
const blogPostSchema = mongoose.Schema({
    title: String,      // Title of the blog post
    content: String,    // Content of the blog post
},
{
    collection: "blogPosts" // Specifying the name of the collection in the database
});

// Exporting the model based on the schema
module.exports = mongoose.model('BlogPost', blogPostSchema);
