import mongoose, { Schema } from "mongoose";

const User = new Schema({
  // user_id: String,
  username: String,
  password: String,
  photo: String,
  chat_id: String,
});

export default mongoose.models.User || mongoose.model("User", User);
