const { request } = require("express");
const Order = require("../model/OrderModel");

const orderCtrl = {
  orderHistory: async (req, res) => {
    try {
      const { userid, items } = req.body;
      items.splice(0,0,new Date().toISOString().slice(0, 10))
    //   for (let item of items) {
    //     item.splice(0, 0, )
    // }
      const filter = { userid: userid };
      const update = { $push: { products: items } };
      await Order.countDocuments(filter);
      let added = await Order.findOneAndUpdate(filter, update, {
        new: true,
        upsert: true, 
      });

      if (!added) return res.status(400).json({ msg: "Cannot add." });
      res.json("success");
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  getOrderHistory: async (req, res) => {
    try {
        const { userid } = req.body;
        const cart = await Order.find({ userid: userid });
        if (!cart) return res.status(400).json({ data: [false] });
        res.json(cart);
      } catch (err) {
        return res.status(500).json({ msg: err.message });
      }
  },
};
module.exports = orderCtrl;