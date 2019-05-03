

const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    To:String,
    From:String,
    Text:String,
    date: { type: Date, default: Date.now },
})

const MessageModel = mongoose.model('message', schema);
module.exports = MessageModel;