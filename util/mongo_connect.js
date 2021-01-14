import mongoose from "mongoose";

async function mongo_connect() {
  if (mongoose.connection.readyState > 1) {
    return;
  }

  return mongoose.connect(process.env.MONGO_URI, {
    useUnifiedTopology: true,
    useFindAndModify: false,
    useNewUrlParser: true,
  });
}

export default mongo_connect;
