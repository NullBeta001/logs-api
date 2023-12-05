import { Schema, model } from "mongoose";

interface Log {
  ipAddress: string;
  date: Date;
  time: string;
  userName: string;
  version: string;
  idTransaction: string;
  action: string;
  description: string;
}

const logSchema = new Schema<Log>(
  {
    ipAddress: String,
    date: Date,
    time: String,
    userName: String,
    version: String,
    idTransaction: String,
    action: String,
    description: String,
  },
  { collection: "logs" }
);

const LogModel = model<Log>("Log", logSchema);

export default LogModel;
