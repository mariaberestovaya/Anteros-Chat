import mongoose, { Schema } from "mongoose";

const ListUsers = new Schema({
  chat_id: String,
  user_id: String,
});

export default mongoose.model("ListUsers", ListUsers);
