const mongoose = require('mongoose')


const reviewSchema = new mongoose.Schema({
    bookid: {
        type: String,
        required: true,
    },
    user: {
        type: String,
        required: true,
    },
    description: {
        type: Array,
        required: true,
    },
}, {
    collection: 'review'
});

module.exports = mongoose.model('Review', reviewSchema)