const Books = require("../model/BookModel");


const bookCtrl = {
  getBooks: async (req, res) => {
    try {
      const book = await Books.find();
      res.json(book);

    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  
};

module.exports = bookCtrl;
