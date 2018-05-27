let router = require('express').Router();

router.use('/users', require('./UserRoutes'));

module.exports = router;
