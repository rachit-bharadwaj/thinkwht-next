import userModel from "@/models/userModel";
import connectDb from "@/middleware/mongoose";


const handler = async (req,res)=>
{
    try
    {
    const vuser = await userModel.updateOne({_id:req.query.id},{$set:{is_verified:1}});
    res.status(200).json({message:"Email Verified"})
    }
    catch(error)
    {
        console.log(error.message)
    }
}
export default connectDb(handler)