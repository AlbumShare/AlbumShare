const api = require('express').Router()
const {Photos} = require('../db/models')
module.exports = api


api.get((req,res) =>
    Photos.findById(req.params.albumId).then(result => res.json(result))
);

// Create a photo TODO: add style checking
api.post('/:id', function(req, res){
    Photos.create({
        //photoId: req.body.photoId,
        albumId: req.body.albumId,
        url: req.body.url
    }).then(function(){
        res.redirect('/');
    });
});

// delete the user by photoId
api.get('/:id', function(req, res) {
    Photos.destroy({
        where: {
            photoId: req.params.photoId
        }
    })
});


module.exports = api;