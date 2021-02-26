import database from "../../util/mongo_connect";
import User from "../../models/User";

export default async function create_chat(
  { body: { username, password, login, image, description } },
  res
) {
  await database();

  await User.create({
    username,
    login,
    password,
    description,
    image,
    chat_id: null,
  });

  res.end();
}
