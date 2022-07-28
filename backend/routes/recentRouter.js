const router = require('express').Router()
const recentCtrl = require('../controller/RecentCtrl')

router.post('/add', recentCtrl.recentViewed)
router.post('/all', recentCtrl.getRecentlyViewed)

module.exports = router