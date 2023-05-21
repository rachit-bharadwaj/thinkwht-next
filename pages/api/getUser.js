import userModel from "@/models/userModel";
import connectDb  from "@/middleware/mongoose";




const handler = async (req,res)=>
{
    let users = await userModel.find()
    res.status(200).json({users})
}
export default connectDb(handler)