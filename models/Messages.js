import mongoose, { Schema } from "mongoose";

const Messages = new Schema({
  // message id is generated automatically
  chat_id: String,
  user_id: String,
  content: String,
  date_create: Date,
});

export default mongoose.models.Messages || mongoose.model("Messages", Messages);
