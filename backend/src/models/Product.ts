import mongoose, { Schema, Document } from "mongoose";

export interface IProduct extends Document {
  name: string;
  description: string;
  ingredients: string;
  category: mongoose.Types.ObjectId;
  stock: number;
  price: number;
  image?: string;
}

const ProductSchema: Schema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  ingredients: { type: String, required: true },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Categories",
    required: true,
  },
  stock: { type: Number, required: true, min: 0 },
  price: { type: Number, required: true, min: 0 },
  image: { type: String },
}, {collection: 'products'});

export default mongoose.model<IProduct>("Products", ProductSchema);
