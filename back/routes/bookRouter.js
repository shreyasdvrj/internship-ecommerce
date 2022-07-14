const router = require('express').Router()
const bookCtrl = require('../controller/BookCtrl')

router.get('/Books', bookCtrl.getBooks)

module.exports = router