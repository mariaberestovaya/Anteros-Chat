import mongoose, { Schema } from "mongoose";

const User = new Schema({
  username: String,
  password: String,
  photo: String,
  // other settings
});

export default mongoose.model("User", User);
