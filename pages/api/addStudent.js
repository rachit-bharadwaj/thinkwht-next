import userModel from "@/models/userModel";
import studentModel from "@/models/studentModel";
import connectDb from "@/middleware/mongoose";
const nodemailer = require("nodemailer");
const smail = process.env.SMAIL;
const spass = process.env.SPASS;
const sendmail2 = async (receiver, user_id) => {
  var subjectto = "Verificaton  Email";
  var message = "Verify Your Email With ThinkWhat ";
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: smail, // generated ethereal user
      pass: spass, // generated ethereal password
    },
  });
  //Sending mail to provided emailid
  let info = transporter.sendMail(
    {
      from: smail, // sender address
      to: receiver, // list of receivers
      subject: subjectto, // Subject line
      html:
        message +
        '<a href="https://localhost:3000/verify?id=' +
        user_id +
        '">Click Here To Verify</a>',
    },
    function (error) {
      console.log(error.message);
    }
  );
};
const handler = async (req, res) => {
  if (req.method == "POST") {
    const reciever = req.body.email;
    const countstudents = await studentModel.count();
    const studentnumber = countstudents + 1;
    const studentid = "TW1625000" + studentnumber;
    const username = req.body.name;
    let new_student = new studentModel({
      name: req.body.name,
      // input
      mobile: req.body.mobile,
      //input
      email: req.body.email,
      // input
      courses: req.body.course,
      courseID: req.body.courseID,
      payment: req.body.payment,
      // input
      transactionID: req.body.trid,
      //input
      studentID: studentid,
      college: req.body.college,
    });
    const user = await new_student.save();
    //sendmail2(reciever,user._id)
    res.json({ success: "Student Added" });
  } else {
    res.status(400).json({ error: "This Method is not allowed" });
  }
};
export default connectDb(handler);
