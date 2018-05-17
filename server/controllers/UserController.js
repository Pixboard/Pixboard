'use strict';

let UserModel = require('../models/UserModel');

class UserController
{
    constructor() {
        this.User = mongoose.model('User');
    }

    index(req, res) {
        this.User.find({}, function(err, user) {
            if (err)
                res.send(err);
            res.json(user);
        });
    }

    show(req, res) {
        this.User.findById(req.params.id, function(err, user) {
            if (err)
                res.send(err);
            res.json(user);
        });
    }

    create(req, res) {
        let new_user = new this.User(req.body);
        new_user.save(function(err, user) {
            if (err)
                res.send(err);
            res.json(user);
        });
    }

    update(req, res) {
        this.User.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, user) {
            if (err)
                res.send(err);
            res.json(user);
        });
    }

    delete(req, res) {
        this.User.remove({
            _id: req.params.id
        }, function(err, user) {
            if (err)
                res.send(err);
            res.json({ message: 'User successfully deleted' });
        });
    }

}
module.exports = UserController;
