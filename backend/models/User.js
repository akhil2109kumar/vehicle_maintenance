
const mongoose = require("mongoose");
require('mongoose-type-email');


const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: mongoose.SchemaTypes.Email,
  name: String,
});

const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;
