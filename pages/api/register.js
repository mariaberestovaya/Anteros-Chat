import database from "../../util/mongo_connect";
import User from "../../models/User";

export default async function register(
  { body: { username, login, password, description, image } },
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
