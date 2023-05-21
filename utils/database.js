import mongoose from "mongoose";

let connected = false;

export const connectDB = async () => {
  mongoose.set("strictQuery", true);

  if (connected) {
    console.log("Connected to DB");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGO_URI, {
      dbName: "users",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    connected = true;
    console.log("Connected to DB");
  } catch (error) {
    console.log(error);
  }
};
