const { Schema,model } = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const newsSchema = new Schema({
    title:{type:String},
    image: {type:String},
    description: {type:String},
    content: {type:String},
    author: {type:String}
    },{timestamps: true}

);

newsSchema.plugin(mongoosePaginate);
module.exports = model('news',newsSchema);