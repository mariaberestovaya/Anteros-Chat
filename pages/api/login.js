import database from "../../util/mongo_connect";
import User from "../../models/User";

export default async function login({ body: { username, password } }, res) {
  await database();

  const get_user = await User.find({
    username,
    password,
  });

  return res.json(get_user);
}
