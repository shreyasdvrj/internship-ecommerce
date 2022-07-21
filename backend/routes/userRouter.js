const router = require('express').Router()
const userCtrl = require('../controller/userCtrl')
const auth = require('../middleware/auth')
const checkUser = require('../middleware/userAuth')

// Register User
router.post('/register', userCtrl.registerUser)
// Login User
router.post('/login', userCtrl.loginUser)

// verify Token
router.get('/verify', userCtrl.verifiedToken)

// router.get('/profile', auth, checkUser, function (req, res) {
//     try {
//         console.log(auth)
//         if(auth) {
//         res.status(200).send(`login page`);}
//         else {
//             res.send("Please Login")
//         }
//     }
//     catch (err) {
//         console.log(auth)
//         res.send({msg : err})
//     }
//   })
  router.get('/profile', userCtrl.profile)

  router.get('/logout', userCtrl.logout)

module.exports = router