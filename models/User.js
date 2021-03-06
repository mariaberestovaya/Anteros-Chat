import mongoose, { Schema } from "mongoose";

const User = new Schema({
  username: String,
  login: String,
  password: String,
  description: String,
  image: String,
  chat_id: String,
});

export default mongoose.models.User || mongoose.model("User", User);
