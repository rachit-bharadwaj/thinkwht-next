import mongoose from "mongoose";
const { Schema } = mongoose;

const internSchema = new Schema({
  name: {
    type: String,
  },
  mobile: {
    type: Number,
  },
  email: {
    type: String,
  },
  courses: {
    type: String,
  },
  courseID: {
    type: String,
  },
  internID: {
    type: String,
  },
  college: {
    type: String,
  },

  date: {
    type: String,
  },
});
mongoose.models = {};
module.exports = mongoose.model("internModel", internSchema);
