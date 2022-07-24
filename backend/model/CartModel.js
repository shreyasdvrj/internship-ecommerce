const mongoose = require('mongoose')


const cartSchema = new mongoose.Schema({
    userid: {
        type: String,
        required: true,
    },
    products: {
        type: Array,
        required: true,
    },
}, {
    collection: 'cart'
});

module.exports = mongoose.model('Cart', cartSchema)