import mongoose, { Schema } from "mongoose";

const Message = new Schema({
  chat_id: String,
  user_id: String,
  content: String,
  date_create: Date,
});

export default mongoose.models.Message || mongoose.model("Message", Message);
