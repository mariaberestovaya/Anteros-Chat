import database from "../../util/mongo_connect";
import Chat from "../../models/Chat";

export default async function chat({ body }, res) {
  await database();
  const chat = await Chat.find({
    roomname: body.roomname,
    password: body.password,
  });
  return res.json(chat);
}
