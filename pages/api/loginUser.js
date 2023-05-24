import userModel from "@/models/userModel";
import connectDb from "@/middleware/mongoose";

const jwt = require("jsonwebtoken");

const handler = async (req, res) => {
  try {
    if (req.method == "POST") {
      const email = req.body.email;
      const password = req.body.password;
      const user = await userModel.findOne({ email: email });
      if (user) {
        const pass = user.password;
        if (password == pass) {
          var token = jwt.sign({ email, password }, "thinkwht");
          const userName = user.displayName;
          const emailID = user.email;

          // console.log(token);
          res.json({ token, userName, emailID, message: "User Logged In" });
        } else {
          res.status(200).json({ message: "Invalid Password" });
        }
      } else {
        res.status(200).json({ message: "Invalid Credentials" });
      }
    } else {
      res.status(400).json({ message: "This Method is not allowed" });
    }
  } catch (error) {
    console.log(error.message);
  }
};

export default connectDb(handler);
