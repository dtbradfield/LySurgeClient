const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/LySurgeDB', (err) => {
    if (!err) {
        console.log('MongoDB connection success.')
    }   else {
        console.log('MongoDB connection failed. Error: ' + JSON.stringify(err, undefined, 2))
    }
});

module.exports = mongoose;