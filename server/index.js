const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const { mongoose, connect } = require("mongoose");
const app = express();

const cookiParser = require('cookie-parser')

// database connection
mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log("DataBase is Connected"))
    .catch(err => console.log("DataBase Not Connected", err));

// middleware
app.use(express.json())
app.use(cookiParser())
app.use(express.urlencoded({ extended: false }))

app.use("/", require("./routes/authRouts"));

const port = 8000;
app.listen(port, () => console.log(`server is running on port ${port}`));
