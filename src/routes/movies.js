const router = require('express').Router();

const { notFound } = require('../controllers/404');
const { about } = require('../controllers/about');
const { createGet, createPost } = require('../controllers/movie');
const { home, details, search } = require('../controllers/catalog');
const { createCastGet, createCastPost } = require('../controllers/cast');

const { attachGet, attachPost } = require('../controllers/attach');

router.get('/', home);
router.get('/search', search);
router.get('/about', about);
router.get('/create', createGet);
router.post('/create', createPost);
router.get('/cast/create', createCastGet);
router.post('/cast/create', createCastPost);
router.get('/details/:id', details);
router.get('/attach/:id', attachGet);
router.post('/attach/:id', attachPost);
router.get('*', notFound);

module.exports = router;
