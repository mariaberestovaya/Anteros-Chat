import database from "../../util/mongo_connect";
import Chat from "../../models/Chat";

export default async function chat({ password = "pass" }, res) {
  await database();
  const chat = await Chat.find({ password: password });

  res.json(chat);
}
