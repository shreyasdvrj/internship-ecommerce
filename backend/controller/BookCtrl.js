const Books = require("../model/BookModel");

// function handleDuplicateKeys(key){
//   var value;
//   if(Array.isArray(key))
//   value = key[key.length-1]
//   return value;
// }

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
      const book = await Books.find().sort({Price:-1}).limit(6);
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

    var science = query.science;
    var adventure_fantasy = query.adventure_fantasy;
    var literature = query.literature; 
    var children = query.children;
    var spirituality_religion = query.spirituality_religion;
    var education = query.education;
    var romance = query.romance;
    var history = query.history;
    var comedy = query.comedy;
    var knowledge = query.knowledge;
    var selfHelp = query.selfHelp;
    var biographies = query.biographies; 

    try {
        const book = await Books.find({$or: [{adventure_fantasy:adventure_fantasy},
          {literature:literature}, {children:children}, 
          {spirituality_religion:spirituality_religion}, {education:education},
          {science:science}, {romance:romance}, {history:history},
          {comedy:comedy}, {knowledge:knowledge}, {selfHelp:selfHelp},
          {biographies:biographies}]}).limit(6);
     
      res.json(book);
      

    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  
};

module.exports = bookCtrl;