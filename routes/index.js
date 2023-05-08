const { Router } = require('express');
const controllers = require('../controllers');

const router = Router();

router.get('/', (req , res)=> res.send('Bienvenido a la API AnimeS'))

router.post('/animes', controllers.createAnime);
router.get('/animes', controllers.getAllAnimes);

module.exports = router;