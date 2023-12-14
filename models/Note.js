const mongoose = require('mongoose');

const noteSchema = {
    title: String,
    desc: String,
    status: String,
    date: {
        type: Date,
        default: Date.now
    }
};

const Note=mongoose.model('Note',noteSchema)

module.exports={Note}