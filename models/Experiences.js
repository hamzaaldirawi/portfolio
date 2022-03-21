const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ExperienceSchema = new Schema({
    admin: {
        type: Schema.Types.ObjectId,
        ref: 'admin'
    },
    name: {
        type: String
    },
    expHead: {
        type: String,
        unique: true
    },
    expHeadLink: {
        type: String,
        unique: true
    },
    expDesc: {
        type: String,
        unique: true
    },
    expRule: {
        type: String,
    },
    expDetails: {
        type: String,
    },
    expSkills: {
        type: Array
    },
    expBImg: {
        type: String
    },
    expImgs: {
        type: [String]
    },
    expGif: {
        type: String
    },
    expUrl: {
        type: String,
        unique: true
    },
    number : {
        type: Number,
    },
    date: {
        type: Date,
        default: Date.now
    }
})

const Experience = mongoose.model('experience', ExperienceSchema)

module.exports = Experience;