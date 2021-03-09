const [Schema,model] = require('mongoose');

const newsSchema = new Schema({
    title:{type:String},
    image: {type:String},
    description: {type:String},
    content: {type:String},
    author: {type:String}
},{
    timestamps:true
});

module.exports = model('news',newsSchema);