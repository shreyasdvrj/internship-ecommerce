const router = require('express').Router()
const bookCtrl = require('../controller/BookCtrl')

router.get('/best', bookCtrl.getBestBooks)
router.get('/all', bookCtrl.getAllBooks)
router.get('/fiction', bookCtrl.getFictionBooks)
router.get('/nonfiction', bookCtrl.getNonFictionBooks)
router.post('/bookid',bookCtrl.getBookById)
router.post('/review', bookCtrl.putReview)
router.post('/allReview', bookCtrl.getReview)
router.get('/:query',bookCtrl.getBookByQuery)


module.exports = router