const Books = require("../model/BookModel");


const bookCtrl = {
  getBookById: async (req, res) => {
    try {
      const book = await Books.findById(req.params.id)
      res.json(book);

    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  getBestBooks: async (req, res) => {
    try {
      const book = await Books.find({bestseller: 'true'});
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
  getFictionBooks: async (req, res) => {
    try {
      const book = await Books.find({fiction: 'true'}).limit(6);
      res.json(book);

    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  getNonFictionBooks: async (req, res) => {
    try {
      const book = await Books.find({fiction: 'false'}).limit(6);
      res.json(book);

    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  getBookByQuery: async (req, res) => {
    var query = req.query;
    try {
      const book = await Books.find(query).limit(6);
      res.json(book);
      

    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  
};

module.exports = bookCtrl;
