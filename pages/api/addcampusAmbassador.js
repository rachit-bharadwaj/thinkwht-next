import userModel from "@/models/userModel";
import studentModel from "@/models/studentModel";
import campusAmbassador from "@/models/campusAmbassador";
import connectDb from "@/middleware/mongoose";
import { DateTime } from "luxon";
const nodemailer = require("nodemailer");
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
    const countstudents = await campusAmbassador.count();
    const studentnumber = countstudents + 1;
    const studentid = "TWCA16250" + studentnumber;
    const username = req.body.name;
    let new_campusambassador = new campusAmbassador({
      name: req.body.name,
      // input
      mobile: req.body.mobile,
      //input
      email: req.body.email,
      // input
      collegeName: req.body.collegename,
      year: req.body.year,
      location: req.body.location,
      // input

      //input
      campusAmbassadorID: studentid,
      branch: req.body.branch,
      date: currentdate,
    });
    const user = await new_campusambassador.save();
    //sendmail2(reciever,user._id)
    // res.status(200).json({ user });
    res.json({ message: "campus ambassador added" });
  } else {
    res.status(400).json({ error: "This Method is not allowed" });
  }
};
export default connectDb(handler);
