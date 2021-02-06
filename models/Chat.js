import mongoose from "mongoose";

const Chat = new mongoose.Schema({
  roomname: String,
  password: String,
  content: Array,
});

export default mongoose.models.Chat || mongoose.model("Chat", Chat);
