import mongoose from "mongoose";

const Chat = new mongoose.Schema({
  roomname: String,
  password: String,
  content: Array,
});

// нам бы дожить до весны... нас не понять, мы дыры в груди
export default mongoose.models.Chat || mongoose.model("Chat", Chat);
