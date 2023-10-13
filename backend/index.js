const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const helmet = require("helmet");
const morgan = require("morgan");
const userRouter = require("./routes/userRoutes.js");
const errorHandler = require("./errorMiddleware/errorMiddleware");

const app = express();

// DB and PORT connection
const PORT = process.env.PORT || 6000;
const DB_MONGOOSE = process.env.MONGO_URL;



app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
// console.log(app);


// Error middleware
app.use(errorHandler);


/* ROUTES */
app.get("/",(req,res) =>{
  res.send("Hey hi its GET HOMEPAGE REQUEST")
})
// app.use("/api/auth" , userRouter);



mongoose
  .connect(DB_MONGOOSE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((res) => console.log("Mongoose connected successfully"))
  .catch((error) => console.log("Failed mongoose connection"))


app.listen(PORT , () => {
    console.log(`listening to server ${PORT}`);
});
