const express = require('express');
let router = express.Router();
let ObjectId = require('mongoose').Types.ObjectId;

let { Post } = require('../models/post');

router.get('/', (req, res) => {
    Post.find( (err, docs) => {
        if ( !err ) { res.send(docs); }
        else { console.log('Error in retrieving posts ' + JSON.stringify(err, undefined, 2)); }
    });
});
//read
router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id)) {
        return res.status(400).send('No post exists with id: ' + req.params.id);
    }

    Post.findById(req.params.id, (err, doc) => {
        if (!err) {
            res.send(doc);
        } else { console.log('Error retrieving PostL' + JSON.stringify(err, undefined, 2)); }
    });
});
//create
router.post('/', (req, res) => {
    let post = new Post({
        title: req.body.title,
        body: req.body.body,
        imgUrl: req.body.imgUrl,
        poster: req.body.poster,
        lykes: req.body.lykes
    });

    post.save( (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Post could not be saved. ' + JSON.stringify(err, undefined, 2)); }
    });
});
//update
router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id)) {
        return res.status(400).send('No post with given id:' + req.params.id);
    }

    let post = {
        title: req.body.title,
        body: req.body.body,
        imgUrl: req.body.imgUrl,
        poster: req.body.poster,
        lykes: req.body.lykes
    };
    Post.findByIdAndUpdate(req.params.id, { $set: post }, { new: true }, (err, doc) => {
        if (!err) {
            res.send(doc);
        } else { console.log('Error updating post: ' + JSON.stringify(err, undefined, 2)); }
    });
});
//delete
router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id)) {
        return res.status(400).send('No post with given id: ' + req.params.id);
    }

    Post.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {
            res.send(doc);
        } else { console.log('Error deleting Post: ' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;