const router = require('express').Router()
const cartCtrl = require('../controller/CartCtrl')

router.post('/all', cartCtrl.getCart)
router.post('/add', cartCtrl.addToCart) 
router.post('/clear', cartCtrl.clearCart)
router.post('/removeProduct', cartCtrl.removeItem)


module.exports = router