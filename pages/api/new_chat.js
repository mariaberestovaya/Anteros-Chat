import database from "../../util/mongo_connect";
import Chat from "../../models/Chat";

export default async function new_chat({ body: { rootname, password } }, res) {
  await database();
  await Chat.create({ rootname, password });

  res.end();
}
