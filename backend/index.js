require('dotenv').config()

const express = require('express');
const mongoose = require("mongoose");
const app = express();

let userSchema = require("./models/User");

const cors = require('cors');

app.use(cors({
    origin: '*'
}));

app.post("/create-user", (req, res, next) => {
  userSchema.create(req.body, (error, data) => {
    if (error) {
      console.log(error, '==============')
      // return next(error);
    } else {
      console.log(data);
      res.json(data);
    }
  });
});

mongoose.connect(
  process.env.DB_URL,
  {
    authSource: "admin",
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.error(err);
    } else {
      app.listen(8080, () => console.log('Example app is listening on port 8080.'));
    }
  }
);
  