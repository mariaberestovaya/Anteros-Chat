import database from "../../util/mongo_connect";
import User from "../../models/User";

export default async function create_chat(
  { body: { username, password, photo } },
  res
) {
  await database();

  await User.create({
    username,
    password,
    photo,
    chat_id: null,
  });

  res.end();
}
