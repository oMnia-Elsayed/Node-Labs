

const mongoose = require('mongoose');

const msgschema = new mongoose.Schema({
    To:String,
    From:String,
    Text:String,
    date: { type: Date, default: Date.now },
})

const MessageModel = mongoose.model('message', msgschema);
module.exports = MessageModel;