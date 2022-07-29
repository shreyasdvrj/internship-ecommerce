require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const userRouter = require('./routes/userRouter')
const bookRouter = require('./routes/bookRouter')
const cartRouter = require('./routes/cartRouter')
const orderRouter = require('./routes/orderRouter')
const recentRouter = require('./routes/recentRouter')

const path = require('path')
var cookies = require("cookie-parser");

const app = express()
app.use(express.json())
app.use(cookies());
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}))

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.header("Access-Control-Allow-Headers", "x-access-token, Origin, X-Requested-With, Content-Type, Accept");
  next();
});


// Routes
app.get("/", function (req, res) {
    res.status(200).send(`Welcome to StoryHouse`);
  });
  
app.use('/users', userRouter)
app.use('/books', bookRouter)
app.use('/cart', cartRouter)
app.use('/order', orderRouter)
app.use('/recent',recentRouter)
//MongoDb connection
// mongoose.connect('mongodb+srv://shreyas:United_1878@cluster0.0txxy.mongodb.net/StoryHouse?retryWrites=true&w=majority', { useNewUrlParser : true})
mongoose.connect('mongodb://localhost:27017/StoryHouse')
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB databse connected");
    //connection.close();
})


  
// Listen Server
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log('Server is running on port', PORT)
})