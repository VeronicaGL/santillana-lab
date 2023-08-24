const mongoose = require('mongoose')
const schema = new mongoose.Schema(
    {
        text: {type: String}, 
        author: {type: mongoose.Schema.Types.ObjectId, ref:'User'},

    },
    {
        timestamps: true,
    }
)
const Tweets = mongoose.model('Tweets', schema)
module.exports = Tweets