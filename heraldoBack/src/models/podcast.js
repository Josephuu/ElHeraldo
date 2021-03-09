const {Schema,model} = require('mongoose');

const podcastSchema = new Schema({
    spotifyFrame: {type:String}
    },
    {timestamps: true},
);

module.exports = model('podcasts', podcastSchema);