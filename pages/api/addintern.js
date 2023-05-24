import internModel from "@/models/internModel";
import connectDb from "@/middleware/mongoose";
const nodemailer = require("nodemailer");
import { DateTime } from "luxon";
const smail = process.env.SMAIL;
const spass = process.env.SPASS;
const dateandtime = () => {
  const dt = DateTime.now();
  var hours = dt.hour;
  var ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12;
  var minutes = dt.minute;
  const month = dt.month;
  const day = dt.day;
  const year = dt.year;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  const finaldate =
    day + "/" + month + "/" + year + " " + hours + ":" + minutes + " " + ampm;
  return finaldate;
};
const handler = async (req, res) => {
  if (req.method == "POST") {
    const currentdate = dateandtime();
    const reciever = req.body.email;
    const countstudents = await internModel.count();
    const studentnumber = countstudents + 1;
    const studentid = "TWIN16250" + studentnumber;
    const username = req.body.name;
    let new_intern = new internModel({
      name: req.body.name,
      // input
      mobile: req.body.mobile,
      //input
      email: req.body.email,
      // input
      collegeName: req.body.collegename,
      year: req.body.year,
      course: req.body.course,
      courseID: req.body.courseId,
      // input

      //input
      internID: studentid,
      branch: req.body.branch,
      date: currentdate,
    });
    const user = await new_intern.save();
    //sendmail2(reciever,user._id)
    res.json({ message: "intern added" });
  } else {
    res.status(400).json({ error: "This Method is not allowed" });
  }
};
export default connectDb(handler);
gn