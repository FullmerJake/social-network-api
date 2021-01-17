const router = require('express').Router()

const {
    
} = require('../../controllers/thought-controller');

// /api/thoughts
router
    .route('/')
    .get();

// /api/thought/:thoughtId
router
    .router('/:id')
    .get()
    .post()
    .put()
    .delete();

// /api/thoughts/:thoughtId/reactions
router
    .route('/:id/reactions')
    .post()
    .delete();


module.exports = router;