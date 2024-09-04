import mongoose from "mongoose";

process.loadEnvFile();

async function mongooseConnection() {
  try {
    mongoose.set("strictQuery", true);

    const url: string = String(process.env.MONGO);

    await mongoose.connect(url);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:\n", error);
  }
}

export default mongooseConnection;

export { mongooseConnection };
