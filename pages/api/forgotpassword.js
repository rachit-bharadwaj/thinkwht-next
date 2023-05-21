import connectDb from "@/middleware/mongoose";
import userModel from "@/models/userModel";
const smail = process.env.SMAIL
const spass = process.env.SPASS
const sendmail3 = async (receiver,user_id)=>
{
var subjectto = "Password Reset Email"
var message = "Click on this link to reset the password "
let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: smail, // generated ethereal user
        pass: spass // generated ethereal password
    }
}); 
//Sending mail to provided emailid
let info = transporter.sendMail({
        from: smail, // sender address
        to: receiver, // list of receivers
        subject: subjectto, // Subject line
        html: message +'<a href="https://localhost:3000/updatepassword?id='+user_id+'"> Click Here to set new Password</a>'
       
    },
    function(error) {
        
        console.log(error.message)
    })

}

const handler = async  (req,res)=>
{
    try
    {
        const reciever = req.body.useremail
        const user = await userModel.findOne({email:reciever})
        if(user)
        {
            const user_id = user._id
           sendmail3(reciever,user_id)
        }
        else
        {
            res.status(200).json({message:"User Not Exist"})
        }
    }
    catch(error)
    {
        console.log(error.message)
    }
}