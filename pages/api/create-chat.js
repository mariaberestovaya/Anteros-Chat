import database from "../../util/mongo_connect";
import Chat from "../../models/Chat";

export default async function create_chat({ body: { name, user_id } }, res) {
  await database();

  await Chat.create({
    name,
    user_id,
  });

  res.end();
}
