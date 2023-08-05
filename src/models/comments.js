const mongoose = require('mongoose');
const commentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a Name'],
        unique: true
    },
    email: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true,
        maxlength: [150]
    }
})

// create the model for comments and export it
const CommentModel = mongoose.model("Comment", commentSchema);

module.exports = CommentModel;