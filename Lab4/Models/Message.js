

const mongoose = require('mongoose');

const Messageschema = new mongoose.Schema({
    To:String,
    From:String,
    Text:String,
    date: { type: Date, default: Date.now },
})

const MessageModel = mongoose.model('message', Messageschema);
module.exports = MessageModel;