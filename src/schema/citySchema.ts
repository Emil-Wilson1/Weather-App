import mongoose, { Document, Schema, Model } from "mongoose";

interface ICity extends Document {
  name: string;
}

const CitySchema: Schema<ICity> = new Schema({
  name: { type: String, required: true },
});

const City: Model<ICity> = mongoose.model<ICity>("City", CitySchema);

export default City;
