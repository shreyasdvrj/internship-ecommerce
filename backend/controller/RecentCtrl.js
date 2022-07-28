const { request } = require("express");
const { default: reactStars } = require("react-rating-stars-component");
const Recent = require("../model/RecentModel");

const recentCtrl = {
  recentViewed: async (req, res) => {
    try {
      var { userid, product } = req.body;
      const filter = { userid: userid };
      if ((await Recent.countDocuments(filter)) == 0) {
        const update = { $push: { products: product } };
        await Recent.countDocuments(filter);
        let added = await Recent.findOneAndUpdate(filter, update, {
          new: true,
          upsert: true,
        });

        if (!added) return res.status(400).json({ msg: "Cannot add." });
        res.json("success");
      } else {
        var recents = await Recent.findOne({ userid: userid });
        recents = recents["products"];
        if (recents.includes(product))
          recents = recents.filter((item) => item !== String(product));
        if (recents.length == 5) {
          recents.shift();
          recents.push(product);
          const added = await Recent.updateOne(
            { userid: userid },
            { $set: { products: recents } }
          );
          if (!added) return res.status(400).json({ msg: "Cannot add." });
          res.json("success");
        } else {
          recents.push(product);
          const added = await Recent.updateOne(
            { userid: userid },
            { $set: { products: recents } }
          );
          if (!added) return res.status(400).json({ msg: "Cannot add." });
          res.json("success");
        }
      }
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  getRecentlyViewed: async (req, res) => {
    try {
      const { userid } = req.body;
      const recent = await Recent.findOne({ userid: userid });
      if (!recent) return res.status(400).json({ data: [false] });
      res.json(recent.products.reverse());
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};
module.exports = recentCtrl;
