import mongoose, { Document, Schema, Model } from "mongoose";

// Define an interface for the City document
interface ICity extends Document {
  name: string;
}

// Define the schema
const CitySchema: Schema<ICity> = new Schema({
  name: { type: String, required: true },
});

// Create and export the model
const City: Model<ICity> = mongoose.model<ICity>("City", CitySchema);

export default City;
