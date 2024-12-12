import mongoose, { Schema, Document } from "mongoose";

export interface ICategory extends Document {
  name: string;
  description: string;
  image?: string;
  creat_date: Date;
}

const CategorySchema: Schema = new Schema({
  name: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  image: { type: String },
  creat_date: { type: Date, default: Date.now },
});

export default mongoose.model<ICategory>("Categories", CategorySchema);
