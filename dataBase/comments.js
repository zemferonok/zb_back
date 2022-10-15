const {Schema, model} = require('mongoose');

// Make a structure of data for db
const CommentsSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },

    email: {
        type: String,
        // unique: true,
        required: true,
        lowercase: true,
        trim: true
    },

    message: {
        type: String,
        required: true
    }
}, {timestamps: true});


// Use the 'users' collection of db
module.exports = model('zb_comments', CommentsSchema);