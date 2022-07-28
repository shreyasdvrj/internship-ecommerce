const mongoose = require('mongoose')


const recentSchema = new mongoose.Schema({
    userid: {
        type: String,
        required: true,
    },
    products: {
        type: Array,
        required: true,
    },
}, {
    collection: 'recent'
});

module.exports = mongoose.model('Recent', recentSchema)