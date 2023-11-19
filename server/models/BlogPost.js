const mongoose = require('mongoose');

// create a model class
const blogPostSchema = mongoose.Schema({
    title: String,
    content: String,
},
{
    collection: "blogPosts" 
});

module.exports = mongoose.model('BlogPost', blogPostSchema);
