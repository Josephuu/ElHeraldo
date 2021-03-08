const { Router } = require('express');
const router = Router();

const {renderIndex} = require('../controllers/main.controllers');

router.get('/', renderIndex);

module.exports = router;