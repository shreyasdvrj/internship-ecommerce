const Users = require("../model/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userCtrl = {
  registerUser: async (req, res) => {
    try {
      const { username, email, password } = req.body;
      const user = await Users.findOne({ email: email });
      if (user)
        return res.status(400).json({ msg: "The email already exists." });

      const passwordHash = await bcrypt.hash(password, 10);
      const newUser = new Users({
        username: username,
        email: email,
        password: passwordHash,
      });
      await newUser.save();
      res.json({ msg: "Sign up Success" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  loginUser: async (req, res) => {
    try {
      const { email, password } = req.body;
      console.log("In login");
      const user = await Users.findOne({ email: email });
      if (!user) return res.status(400).json({ msg: "User does not exist." });

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) return res.status(400).json({ msg: "Incorrect password." });

      // if login success create token
      const payload = { id: user._id, name: user.username };
      const token = jwt.sign(payload, process.env.TOKEN_SECRET, {
        expiresIn: "1d",
      });
      res.cookie("jwt", token);
      // res.cookie('jwt', token,
      // {  httpOnly: true,
      //   origin: 'http://localhost:3000'})
      console.log("Works");
      res.json({ user: user._id, isAuth: true, msg: "Logged In" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  verifiedToken: async (req, res) => {
    try {
      const token = req.cookies["jwt"];
      if (!token) return res.send(false);

      jwt.verify(token, process.env.TOKEN_SECRET, async (err, verified) => {
        if (err) return res.send(false);

        const user = await Users.findById(verified.id);
        if (!user) return res.send(false);
        return res.send(user);
      });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  logout: (req, res) => {
    try {
      res.cookie("jwt", "", { maxAge: 1 });
      res.send("Logged out");
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  profile: (req, res) => {
    try {
      const token = req.cookies["jwt"];
      if (!token) return res.send(false);

      jwt.verify(token, process.env.TOKEN_SECRET, async (err, verified) => {
        if (err) return res.send(err);
        const user = await Users.findById(verified.id);
        if (!user) return res.send(false);
        return res.send({"userid" : user._id, "username" : user.username});
      });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};

module.exports = userCtrl;
