const mongoose = require("mongoose");
const { Schema } = mongoose;

const campusSchema = new Schema({
  name: {
    type: String,
  },
  mobile: {
    type: Number,
  },
  email: {
    type: String,
  },
  collegeName: {
    type: String,
  },
  branch: {
    type: String,
  },
  year: {
    type: String,
    default: "",
  },
  location: {
    type: String,
  },
  campusAmbassadorID: {
    type: String,
  },
  date: {
    type: String,
  },
});
mongoose.models = {};
module.exports = mongoose.model("campusAmbassadorModel", campusSchema);
