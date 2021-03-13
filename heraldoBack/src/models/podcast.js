const {Schema,model} = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const podcastSchema = new Schema({
    spotifyFrame: {type:String}
    },
    {timestamps: true}
);

podcastSchema.plugin(mongoosePaginate);
module.exports = model('podcasts', podcastSchema);