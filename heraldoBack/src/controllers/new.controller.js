const newCtrl = {};
const NEW = require('../models/news.schema');

newCtrl.renderNoticia = async(req, res)=>{
    const New = await NEW.findById(req.params.id);
    console.log(New);
    res.render('noticiaEspecifica', { New });
};

module.exports = newCtrl;