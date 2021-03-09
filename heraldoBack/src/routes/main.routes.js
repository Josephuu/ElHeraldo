const { Router } = require('express');
const router = Router();

const { renderIndex,
        renderNoticia,
        renderNoticias,
        renderProgramacion
    } = require('../controllers/main.controllers');

router.get('/', renderIndex);

router.get('/noticia-especifica',renderNoticia);

router.get('/noticias', renderNoticias);

router.get('/programas', renderProgramacion)


module.exports = router;