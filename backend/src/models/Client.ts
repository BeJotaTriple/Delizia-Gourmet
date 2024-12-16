import mongoose, { Schema, Document } from "mongoose";

export interface IClient extends Document {
  name: string;
  email: string;
  address: string;
  city: string;
  tel_numb: string;
  reg_date: Date;
}

const ClientSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  tel_numb: { type: String, required: true },
  reg_date: { type: Date, default: Date.now },
},{collection: 'clients'});

export default mongoose.model<IClient>("Clients", ClientSchema);
