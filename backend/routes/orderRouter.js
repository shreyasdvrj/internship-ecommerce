const router = require('express').Router()
const orderCtrl = require('../controller/OrderCtrl')

router.post('/add', orderCtrl.orderHistory)
router.post('/all', orderCtrl.getOrderHistory)

module.exports = router