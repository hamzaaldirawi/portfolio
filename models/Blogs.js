const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BlogSchema = new Schema({
    admin: {
        type: Schema.Types.ObjectId,
        ref: 'admin'
    },
    name: {
        type: String
    },
    blogText: {
        type: String,
    },
    blogName: {
        type: String,
        unique: true
    }, 
    blogImg: {
        type: String,
    },
    blogUrl: {
        type: String,
        unique: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

const Blog = mongoose.model('blog', BlogSchema)

module.exports = Blog;