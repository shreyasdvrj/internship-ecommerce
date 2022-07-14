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
    bookFormat: {
        type: String,
        required: true
    },
    pages: {
        type: Number,
        required: true
    },
    publisher: {
        type: String,
        required: true
    },
    publishDate: {
        type: Date,
        required: true
    },
    numRatings: {
        type: Number,
        required: true
    },
    ratingsByStars: {
        type: String,
        required: true
    },
    likedPercent: {
        type: Number,
        required: true
    },
    coverImg: {
        type: String,
        required: true
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
    fiction_non_fiction: {
        type: Number,
        required: true
    },

})

module.exports = mongoose.model('Books', bookSchema)