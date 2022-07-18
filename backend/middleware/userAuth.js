const jwt = require("jsonwebtoken");
const userModel = require("../model/userModel");

const checkUser = (req, res, next) => {
    const token = req.cookies.jwt;
    if (token) {
      jwt.verify(token, process.env.TOKEN_SECRET, async (err, userToken) => {
        if (err) {
          res.locals.user = null;
          return res.status(400).json({ msg: "Authorization not valid." });
        }
  
        console.log(userToken.name);
        let user = await userModel.findById(userToken.id);
        res.locals.user = user;
        next();
      });
    } else {
      res.locals.user = null;
      next();
    }
  };

  
module.exports = checkUser;
