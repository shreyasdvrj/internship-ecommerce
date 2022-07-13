require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const userRouter = require('./routes/userRouter')
const path = require('path')
var cookies = require("cookie-parser");

const app = express()
app.use(express.json())
app.use(cookies());
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}))

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });


// Routes
app.get("/", function (req, res) {
    res.status(200).send(`Welcome to login , sign-up api`);
  });
  
app.use('/users', userRouter)

//MongoDb connection
mongoose.connect('mongodb://127.0.0.1:27017/storyhouse', { useNewUrlParser : true})
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB databse connected");
})

  
// Listen Server
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log('Server is running on port', PORT)
})