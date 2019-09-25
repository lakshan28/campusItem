const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const ProfileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  handle: {
    //name
    type: String,
    required: true
  },
  university: {
    type: String
  },
  contactNo: {
    // type: Number
    type: String
  },
  name: {
    // sell item/hire student
    type: String,
    required: true
  },
  location: {
    type: String
  },

  email: {
    type: String
  },
  status: {
    // Item or job field
    type: String,
    required: true
  },
  feild: {
    //price
    type: String
  },

  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Profile = mongoose.model("profile", ProfileSchema);
