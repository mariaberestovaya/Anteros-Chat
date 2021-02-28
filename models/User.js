import mongoose, { Schema } from "mongoose";

const User = new Schema({
  // user_id: String,
  username: String,
  login: String,
  password: String,
  description: String,
  image: String,
  chat_id: String,
  isAuth: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.models.User || mongoose.model("User", User);
