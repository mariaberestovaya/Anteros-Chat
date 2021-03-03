import database from "../../util/mongo_connect";
import User from "../../models/User";

//TODO при регистрации создавать новый чат

export default async function create_chat(
  { body: { username, password, login, image, description } },
  res
) {
  await database();

  const new_user = await User.create({
    username,
    login,
    password,
    description,
    image,
    chat_id: null,
  });

  res.json(new_user);
}
