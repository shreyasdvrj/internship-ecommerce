const router = require('express').Router()
const bookCtrl = require('../controller/BookCtrl')

router.get('/best', bookCtrl.getBestBooks)
router.get('/all', bookCtrl.getAllBooks)
router.get('/fiction', bookCtrl.getFictionBooks)
router.get('/nonfiction', bookCtrl.getNonFictionBooks)
router.get('/:id',bookCtrl.getBookById)

module.exports = router