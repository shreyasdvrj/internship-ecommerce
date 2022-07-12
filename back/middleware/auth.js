const jwt = require("jsonwebtoken");
const userModel = require("../model/userModel");

const auth = (req, res, next) => {
  try {
    token = req.cookies.jwt;
    if (!token) return res.status(400).json({ msg: "Invalid Authentication" });

    jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
      if (err) return res.status(400).json({ msg: "Authorization not valid." });

      req.user = user;
      next();
    });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};



module.exports = auth;