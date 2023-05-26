import userModel from "@/models/userModel";
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
        '<a href="http://localhost:3000/verify?id=' +
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

    const existUser = await userModel.findOne({ email: reciever });
    if (existUser) {
      await res.json({ message: "User Already Exist" });
    } else {
      let new_user = new userModel({
        displayName: req.body.name,
        email: req.body.email,
        password: req.body.password,
      });
      const user = await new_user.save();
      // sendmail2(reciever, user._id);
      await res.json({ message: "User Added Successfully" });
    }
  } else {
    res.status(400).json({ error: "This method is not allowed" });
  }
};
export default connectDb(handler);
