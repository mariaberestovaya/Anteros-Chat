import database from "../../util/mongo_connect";
import Messages from "../../models/Message";

export default async function messages(req, res) {
  await database;

  const messages = await Messages.find({
    chat_id: req.body.chat_id,
  });

  return res.json(messages);
}
