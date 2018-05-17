'use strict';

module.exports = function(app) {
    let UserController =  require('../controllers/UserController');
    let user = new UserController();

    app.get('/users', function (req, res) {
        user.index(req, res)
    });

    app.get('/users/:id', function (req, res) {
        user.show(req, res)
    });

};