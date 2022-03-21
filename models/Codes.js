const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CodeSchema = new Schema({
    admin: {
        type: Schema.Types.ObjectId,
        ref: 'admin'
    },
    name: {
        type: String
    },
    codeName: {
        type: String,
        unique: true
    },
    codeBImg: {
        type: String
    },
    codeGif: {
        type: String
    },
    codeUrl: {
        type: String,
        unique: true
    },
    number: {
        type: Number
    },
    date: {
        type: Date,
        default: Date.now
    }
})

const Code = mongoose.model('code', CodeSchema)

module.exports = Code;