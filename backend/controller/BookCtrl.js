const Books = require("../model/BookModel");


const bookCtrl = {
  getBestBooks: async (req, res) => {
    try {
      const book = await Books.find({bestseller: 'true'}).limit(6);
      res.json(book);

    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  getAllBooks: async (req, res) => {
    try {
      const book = await Books.find().limit(6);
      res.json(book);

    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  
};

module.exports = bookCtrl;
