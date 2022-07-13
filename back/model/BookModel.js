const mongoose = require('mongoose')


const bookSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    isbn: {
        type: String,
        required: true,
        unique: true
    },
    price: {
        type: Number,
        required: true
    },
    adventure_fantasy: {
        type: Boolean,
        required: true
    },
    literature: {
        type: Boolean,
        required: true
    },
    children: {
        type: Boolean,
        required: true
    },
    spirituality_religion: {
        type: Boolean,
        required: true
    },
    education: {
        type: Boolean,
        required: true
    },
    science: {
        type: Boolean,
        required: true
    },
    romance: {
        type: Boolean,
        required: true
    },
    history: {
        type: Boolean,
        required: true
    },
    knowledge: {
        type: Boolean,
        required: true,
    },
    selfhelp: {
        type: Boolean,
        required: true
    },
    comedy: {
        type: Boolean,
        required: true
    },
    biographies: {
        type: Boolean,
        required: true
    },

})

module.exports = mongoose.model('Books', bookSchema)