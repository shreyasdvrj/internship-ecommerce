const { request } = require("express");
const Cart = require("../model/CartModel");

const cartCtrl = {
  getCart: async (req, res) => {
    try {
      const { userid } = req.body;
      const cart = await Cart.find({ userid: userid });
      if (!cart) return res.status(400).json({ data: [false] });
      res.json(cart);
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  addToCart: async (req, res) => {
    try {
      const { bookid, userid } = req.body;
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
  clearCart: async (req, res) => {
    try {
      await Cart.deleteOne({ userid: req.body.userid });
      return res.status(200).json({ success: true, msg: "Cart Cleared" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  removeItem: async (req, res) => {
    try {
      const userid = req.body.userid;
      var product = await Cart.findOne({ userid: userid });
      product = product["products"];
      product.splice(req.body.index, 1);
      const cleared = await Cart.updateOne({userid:userid}, {"$set" : {"products" : product}});
      if (!cleared) return res.status(200).json({ success: true, msg: "Product Deleted" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};

module.exports = cartCtrl;
