const { Schema, model } = require("mongoose");

const devSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    user: {
        type: String,
        required: true
    },
    bio: String,
    like: [{
        type: Schema.Types.ObjectId,
        ref: 'Dev'
    }],
    dislike: [{
        type: Schema.Types.ObjectId,
        ref: 'Dev'
    }],
    avatar: {
        type: String,
        required: true
    }
}, { timestamps: true });

module.exports = model('Dev', devSchema);