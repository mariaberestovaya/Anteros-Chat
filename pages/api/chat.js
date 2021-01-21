import database from "../../util/mongo_connect";
import Chat from "../../models/Chat";
// а вдруг счастливым я был вчера, а мне не сказал никто?

export default async function chat({ body }, res) {
  await database();
  const chat = await Chat.find({
    roomname: body.roomname,
    password: body.password,
  });
  console.log(chat);
  return res.json(chat);
}
