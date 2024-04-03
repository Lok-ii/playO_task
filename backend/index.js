const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const userRouter = require("./routes/user");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(
  cors({
    origin: "*", // or specify your origin
    methods: ["GET", "POST", "PATCH", "PUT", "DELETE", "OPTIONS"], // specify allowed methods
  })
);
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", userRouter);

mongoose
  .connect(process.env.CONNECTION_STRING)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => console.error(err));

app.listen("10000", () => {
  console.log("Server is running on port 10000");
});
