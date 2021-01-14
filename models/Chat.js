import mongoose from "mongoose";

const Chat = new mongoose.Schema({
  rootname: String,
  password: String,
  // content: [
  //   {
  //     name: String,
  //     date: Date,
  //     message: String,
  //   },
  // ],
});

export default mongoose.models.Chat || mongoose.model("Chat", Chat);
