import database from "../../util/mongo_connect";
import Chat from "../../models/Chat";

export default async function create_chat(
  { body: { chatname, user_id } },
  res
) {
  await database();

  const chat = await Chat.create({
    chatname,
    user_id,
  });

  res.json(chat);
}
