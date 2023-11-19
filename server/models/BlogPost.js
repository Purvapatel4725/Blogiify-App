const mongoose = require('mongoose');


const blogPostSchema = mongoose.Schema({
    title: String,
    content: String,
},
{
    collection: "blogPosts" 
});

module.exports = mongoose.model('BlogPost', blogPostSchema);
