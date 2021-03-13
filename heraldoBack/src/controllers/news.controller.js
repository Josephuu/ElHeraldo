const newsCtrl = {};
const article = require('../models/news.schema');


newsCtrl.renderNoticias = async(req, res)=>{
    const page = parseInt(req.query.page, 10) || 1;

    var prevPage = parseInt(req.query.prevPage, 10);
    const firstPage = 1;
    var totalDocs= req.query.totalDocs;
    const limit = 3;
    const totalPages = req.query.totalPages;
    var nextPage = req.query.nextPage;
    var prevPage = req.query.prevPage ;
    if(prevPage <= 0 ){prevPage = 1};
    const sort = {createdAt:-1}

    const ARTICLE = await article.paginate({},{
        limit,
        page,
        prevPage,
        nextPage,
        totalPages,
        sort});
    const articleDoc = ARTICLE.docs

    res.render('noticias',{articleDoc,ARTICLE});
};

module.exports = newsCtrl;