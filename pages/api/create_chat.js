import database from "../../util/mongo_connect";
import Chat from "../../models/Chat";

export default async function create_chat(
  { body: { roomname, password } },
  res
) {
  await database();

  await Chat.create({
    roomname,
    password,
    // content,
  });

  res.end();
}
