import database from "../../util/mongo_connect";
import Chat from "../../models/Chat";

export default async function chat({ body: { user_id } }, res) {
  await database();

  const chat = await Chat.find({
    user_id,
  });

  res.json(chat);
}
