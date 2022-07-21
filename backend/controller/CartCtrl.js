const Cart = require("../model/CartModel");

const cartCtrl = {
  getCart: async (req, res) => {
    try {
      const {userid} = req.body;
      const cart = await Cart.find({userid: userid});
      res.json(cart);
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  addToCart: async (req, res) => {
    try {
      const {bookid, userid} = req.body;
      const filter = { userid: userid };
      const update = { $push: { products: bookid } };
      await Cart.countDocuments(filter);
      let added = await Cart.findOneAndUpdate(filter, update, {
        new: true,
        upsert: true, // Make this update into an upsert
      });

      if (!added) return res.status(400).json({ msg: "Cannot add." });
      res.json("success");
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};

module.exports = cartCtrl;