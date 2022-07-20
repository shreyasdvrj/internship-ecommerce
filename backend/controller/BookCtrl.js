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
    if(Array.isArray(science))
       science = science[science.length-1]
    if(Array.isArray(adventure_fantasy))
       adventure_fantasy = adventure_fantasy[adventure_fantasy.length-1]
    if(Array.isArray(literature))
       literature = literature[literature.length-1]
    
    
    try {
      const book = await Books.find( {$or: [{adventure_fantasy:adventure_fantasy},
        {literature:literature}, {children:query.children}, 
        {spirituality_religion:query.spirituality_religion}, {education:query.education},
        {science:science}, {romance:query.romance}, {history:query.history},
        {comedy:query.comedy}, {knowledge:query.knowledge}, {selfHelp:query.selfHelp},
        {biographies:query.biographies}]} ).limit(6);
      res.json(book);
      

    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  
};

module.exports = bookCtrl;