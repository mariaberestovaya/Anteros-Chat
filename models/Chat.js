import mongoose, { Schema } from "mongoose";

const Chats = new Schema({
  // chat id is generated automatically
  name: String,
  user_id: String,
});

export default mongoose.models.Chats || mongoose.model("Chats", Chats);
