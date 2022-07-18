const router = require('express').Router()
const bookCtrl = require('../controller/BookCtrl')

router.get('/best', bookCtrl.getBestBooks)
router.get('/all', bookCtrl.getAllBooks)

module.exports = router