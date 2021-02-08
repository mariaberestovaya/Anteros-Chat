import mongoose, { Schema } from "mongoose";

const Chats = new Schema({
  // chat id is generated automatically
  login: String,
  user_id: String,
});

export default mongoose.model("Chats", Chats);
