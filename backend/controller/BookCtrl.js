const Books = require("../model/BookModel");
const Review = require("../model/ReviewModel");
const mongoose = require("mongoose");
// function handleDuplicateKeys(key){
//   var value;
//   if(Array.isArray(key))
//   value = key[key.length-1]
//   return value;
// }

const bookCtrl = {
  getBookById: async (req, res) => {
    try {
      const { bookid } = req.body;
      var id = mongoose.Types.ObjectId(bookid);
      const book = await Books.findById(id);
      res.json(book);
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  getBestBooks: async (req, res) => {
    try {
      const book = await Books.find({ bestseller: "true" });
      res.json(book);
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  getAllBooks: async (req, res) => {
    try {
      const book = await Books.find().sort({ Price: -1 }).limit(6);
      console.log(typeof book[0]._id);
      res.json(book);
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  getFictionBooks: async (req, res) => {
    try {
      const book = await Books.find({ fiction: "true" }).limit(6);
      res.json(book);
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  getNonFictionBooks: async (req, res) => {
    try {
      const book = await Books.find({ fiction: "false" }).limit(6);
      res.json(book);
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  getBookByQuery: async (req, res) => {
    var query = req.query;

    try {
      const book = await Books.find({
        $or: [
          { adventure_fantasy: query.adventure_fantasy },
          { literature: query.literature },
          { children: query.children },
          { spirituality_religion: query.spirituality_religion },
          { education: query.education },
          { science: query.science },
          { romance: query.romance },
          { history: query.history },
          { comedy: query.comedy },
          { knowledge: query.knowledge },
          { selfHelp: query.selfHelp },
          { biographies: query.biographies },
        ],
      }).limit(6);
      res.json(book);
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  getReview: async (req, res) => {
    try {
      const { bookid } = req.body;
      const review = await Review.findOne({ bookid: bookid });
      if (review) res.json(review);
      else res.json({ bookid: false });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  putReview: async (req, res) => {
    try {
      const { title, description, bookid, user } = req.body;
      const val = [title, description, user];
      const filter = { bookid: bookid };
      const update = { $push: { description: val } };
      await Review.countDocuments(filter);
      let review = await Review.findOneAndUpdate(filter, update, {
        new: true,
        upsert: true, // Make this update into an upsert
      });

      if (!review) return res.status(400).json({ msg: "Cannot add." });
      res.json("success");
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};

module.exports = bookCtrl;
