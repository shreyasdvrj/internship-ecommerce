const router = require('express').Router()
const bookCtrl = require('../controller/BookCtrl')
router.post('/review', bookCtrl.putReview)
router.post('/allReview', bookCtrl.getReview)
router.get('/search', bookCtrl.getAllBooks)
router.get('/byTitle', bookCtrl.getBookByTitle)
router.get('/:query',bookCtrl.getBookByQuery)
router.post('/:bookid',bookCtrl.getBookById)


module.exports = router