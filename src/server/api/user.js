const api = require('express').Router()
const {User} = require('../db/models')
module.exports = api


api.post('/:id', function(req, res){
    User.create({
        username: req.body.username,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        password: req.body.password,
        email: req.body.email
    }).then(function(){
        res.redirect('/');
    });
});

// delete the user by username
api.delete('/:id', function(req, res) {
    User.delete({
        where: {
            username: req.params.username
        }
    })
});




module.exports = api;