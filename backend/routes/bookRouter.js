const router = require('express').Router()
const bookCtrl = require('../controller/BookCtrl')
router.post('/review', bookCtrl.putReview)
router.post('/allReview', bookCtrl.getReview)
router.get('/search', bookCtrl.getAllBooks)
router.post('/:bookid',bookCtrl.getBookById)
router.get('/:query',bookCtrl.getBookByQuery)



module.exports = router