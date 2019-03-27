const api = require('express').Router()
const {Albums} = require('../db/models')
module.exports = api


// Create an Albums TODO: add style checking
api.post('/:id', function(req, res){
    Albums.create({
        albumId: req.body.albumId,
        username: req.body.username,
        privacy: req.body.privacy,
        description: req.body.description
    }).then(function(){
        res.redirect('/');
    });
});

// delete the album by albumId
api.get('/:id', function(req, res) {
    Albums.destroy({
        where: {
            albumId: req.params.albumId
        }
    }).then(function() {
        res.redirect('/');
    });
});

// find the album by userId
// router.get('/', function(req,res))
// {
//     const albums = Albums.findById(req.params.username)
//     const filteredUser =
//         {
//             username: user.username,
//             firstname: user.firstname,
//             lastname: user.lastname,
//             email: user.email,
//             password: user.password,
//         }
//     res.json(filteredUser)
// }
api.get('/', (req, res, next) => {
    Albums.findAll({
        where: {
            quantity_available: {
                $gt: 0
            }
        }
    })
        .then(albums => res.json(albums))
        .catch(next)
})

api.get('/:albumId', (req, res, next) => {
    Albums.findOne({
        where: {
            id: +req.params.albumId
        }
    })
        .then(album => res.json(album))
        .catch(next)
})
// TODO: adding more logic like adding comments etc

module.exports = api;