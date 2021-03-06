import mongoose, { Schema } from "mongoose";

const Chats = new Schema({
  chatname: String,
  user_id: String,
});

export default mongoose.models.Chats || mongoose.model("Chats", Chats);
