const router = require('express').Router()
const cartCtrl = require('../controller/CartCtrl')

router.post('/all', cartCtrl.getCart)
router.post('/add', cartCtrl.addToCart) 

module.exports = router