const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();
const PORT = process.env.PORT || 5000;

const app = express();
// console.log(app);



mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((res) => console.log("Mongoose connected successfully"))
  .catch((error) => console.log("Failed mongoose connection"))


app.listen(PORT , (req,res) => {
    console.log(`listening to server ${PORT}`);
});
