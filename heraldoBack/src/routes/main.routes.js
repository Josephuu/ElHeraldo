const { Router } = require('express');
const router = Router();

const { renderIndex } = require('../controllers/index.controller');
const { renderNoticia } = require('../controllers/new.controller');
const { renderNoticias } = require('../controllers/news.controller');
const { renderProgramacion } = require('../controllers/programation.controller');

router.get('/', renderIndex);

router.get('/noticia-especifica',renderNoticia);

router.get('/noticias', renderNoticias);

router.get('/programas', renderProgramacion)


module.exports = router;