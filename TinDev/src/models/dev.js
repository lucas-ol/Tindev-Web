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

    }],
    dislike: [{}],
    avatar: {
        type: String,
        required: true
    }
}, { timestamps: true });

module.exports = model('dev', devSchema);