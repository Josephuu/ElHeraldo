const pdstCtrl = {};
const podcast = require('../models/podcast')


pdstCtrl.renderPodcast = async(req,res)=>{
    const page = parseInt(req.query.page, 10) || 1;

    var prevPage = parseInt(req.query.prevPage, 10);
    const firstPage = 1;
    var totalDocs= req.query.totalDocs;
    const limit = 10;
    const totalPages = req.query.totalPages;
    var nextPage = req.query.nextPage;
    var prevPage = req.query.prevPage ;
    if(prevPage <= 0 ){prevPage = 1};
    const sort = {createdAt:-1}

    const PODCAST = await podcast.paginate({},{
        limit,
        page,
        prevPage,
        nextPage,
        totalPages,
        sort});
    const podcastDoc = PODCAST.docs
    res.render('podcast',{podcastDoc, PODCAST})
};

module.exports = pdstCtrl;