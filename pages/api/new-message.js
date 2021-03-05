import database from "../../util/mongo_connect";
import Message from "../../models/Message";

export default async function new_message(
  { body: { user_id, chat_id, content } },
  res
) {
  await database();

  const message = await Message.create({
    user_id,
    chat_id,
    content,
  });

  res.json(message);
}
