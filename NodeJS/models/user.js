const mongoose = require('mongoose');

let User = mongoose.model('User', {
    username: { type: String }
});