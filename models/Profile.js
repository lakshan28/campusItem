const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const ProfileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  handle: {
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
    type: String
  },
  location: {
    type: String
  },

  email: {
    type: String
  },
  status: {
    type: String,
    required: true
  },
  feild: {
    type: String
  },

  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Profile = mongoose.model("profile", ProfileSchema);
