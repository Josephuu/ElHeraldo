const mainCtrl = {};

mainCtrl.renderIndex= (req,res)=>{
    res.render('index')
};
mainCtrl.renderNoticia = (req, res)=>{
    res.render('noticiaEspecifica')
};
mainCtrl.renderNoticias = (req, res)=>{
    res.render('noticias')
};
mainCtrl.renderProgramacion = (req, res)=>{
    res.render('programacion')
};

module.exports = mainCtrl;