import database from "../../util/mongo_connect";
import User from "../../models/User";

//TODO при регистрации создавать новый чат

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
  });

  res.json(new_user);
}
