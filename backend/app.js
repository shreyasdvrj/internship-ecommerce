import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const app = express();
app.use(express.static("../src/index.js"));

// Body Parser
app.use(bodyParser.json());

// DB Config
mongoose
.connect('mongodb://localhost:27017/usersdb')
.then(()=> console.log('MongoDB is successfully connected'))
.catch(err => console.log(err));

var db = mongoose.connection;
 
db.on('error', console.error.bind(console, 'connection error:'));
 
db.once('open', function() {
    console.log("Connection Successful!");
     
    // define Schema
    var BookSchema = mongoose.Schema({
      name: String,
      price: Number,
      quantity: Number
    });
 
    // compile schema to model
    var Book = mongoose.model('Book', BookSchema, 'bookstore');
 
    // a document instance
    var book1 = new Book({ name: 'Introduction to 1234', price: 10, quantity: 25 });
 
    // save model to database
    book1.save(function (err, book) {
      if (err) return console.error(err);
      console.log(book.name + " saved to bookstore collection.");
    });
     
});

const port = 5000;

app.listen(port, () =>
    console.log(`Server started on port: 5000`)
);