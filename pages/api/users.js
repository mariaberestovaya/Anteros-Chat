import database from "../../util/mongo_connect";
import User from "../../models/User";

export default async function getAllUsers(req, res) {
  await database();

  const get_all_users = await User.find();
  return res.json(get_all_users);
}
