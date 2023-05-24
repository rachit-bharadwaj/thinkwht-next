import userModel from "@/models/userModel";
import connectDb from "@/middleware/mongoose";

const handler = async (req, res) => {
  let user = await userModel.findByIdAndDelete({ _id: req.body._id });
  res.status(200).json({ message: "user deleted" });
};
export default connectDb(handler);
