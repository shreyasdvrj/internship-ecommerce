const Books = require("../model/BookModel");
const Review = require("../model/ReviewModel");
const mongoose = require("mongoose");

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
  getAllBooks: async (req, res) => {
    try {
      const book = await Books.find().limit(20);
      res.json(book);
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  getBookByQuery: async (req, res) => {
    var query = req.query;
    var book;
    var g = query.startPrice;
    var l = query.endPrice;
    const { page,limit} = req.query;
    if (!g || !l)
    {
      g = 0
      l= 75000
    }
    const q = JSON.stringify(query);
    try {
        if(query.bestseller == 'true' && query.fiction == 'true')
          book = await Books.find({ $and: [{fiction: "true" }, {bestseller: "true"}, {price: {$gt:g, $lt:l}}]}).limit(limit * 1).skip((page - 1) * limit).exec();
    
        else if(query.bestseller == 'true' && query.nonfiction == 'true')
          book = await Books.find({ $and: [{fiction: "false" }, {bestseller: "true"}, {price: {$gt:g, $lt:l}}]}).limit(limit * 1).skip((page - 1) * limit).exec();
         
        else if(query.bestseller == 'true')
         {
          book = await Books.find({ $and: [{bestseller: "true"}, {price: {$gt:g, $lt:l}}]}).limit(limit * 1).skip((page - 1) * limit).exec();
         }

        else if(query.all == 'true' && query.fiction == 'true')
          book = await Books.find({ $and: [{fiction: "true" }, {price: {$gt:g, $lt:l}}]}).limit(limit * 1).skip((page - 1) * limit).exec();
         
        else if(query.all == 'true' && query.nonfiction == 'true')
          book = await Books.find({ $and: [{fiction: "false" }, {price: {$gt:g, $lt:l}}]}).limit(limit * 1).skip((page - 1) * limit).exec();
         
        else if(query.all == 'true')
          book = await Books.find().limit(limit * 1).skip((page - 1) * limit).exec();
         
        else if(q.length <=45 && query.fiction == 'true')
          book = await Books.find({ fiction: "true" }).limit(limit * 1).skip((page - 1) * limit).exec();
          
        else if(q.length <=45 && query.fiction == 'false')
          book = await Books.find({ fiction: "false" }).limit(limit * 1).skip((page - 1) * limit).exec();
          
        else
          {
            book = await Books.find({
              $and: [
                {fiction: query.fiction},
                {price: {$gt:g, $lt:l}},
                {
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
              ],}]
            }).limit(limit * 1).skip((page - 1) * limit).exec();
            //const count = await Books.countDocuments();
          }
      
      res.json({
        book,
        // totalPages: Math.ceil(count / limit),
        currentPage: page
      });
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
