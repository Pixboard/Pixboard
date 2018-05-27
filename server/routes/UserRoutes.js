'use strict';
let users = require('express').Router();


let UserController =  require('../controllers/UserController');
let user = new UserController();

users.get('/', function (req, res) {
    user.index(req, res)
});

users.get('/:id', function (req, res) {
    user.show(req, res)
});

users.post('/', function (req, res) {
  user.create(req, res)
});



module.exports = users;
