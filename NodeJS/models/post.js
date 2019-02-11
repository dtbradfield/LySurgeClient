const mongoose = require('mongoose');

let Post = mongoose.model('Post', {
    title: { type: String },
    body: { type: String },
    imgUrl: { type: String },
    poster: { type: String },
    lykes: { type: Number }
});

module.exports = { Post };