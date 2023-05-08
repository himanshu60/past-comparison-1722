const mongoose = require('mongoose');

const BlacklistSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },tokens: {
        type: [String],
        default: []
    }
})

const BlacklistModel = mongoose.model('blacklist', BlacklistSchema)

module.exports = {
    BlacklistModel
}