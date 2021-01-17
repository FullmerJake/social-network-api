const router = require('express').Router();
const usersRoutes = require('./users-routes.js');
const thoughtRoutes = require('./thought-routes.js');

router.use('/users', usersRoutes);
router.use('/thoughts', thoughtRoutes);

module.exports = router;