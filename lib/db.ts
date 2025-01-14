 import mongoose from "mongoose";

export const connectToDB = async () => {
  const connectionUrl = process.env.MONGO_URL;

  if (!connectionUrl) {
    throw new Error("No Connection url");
  }

  try {
    await mongoose.connect(connectionUrl);
    console.log("Connected To MongoDB");
  } catch (error) {
    console.log("Error in DB connection");
  }
};
