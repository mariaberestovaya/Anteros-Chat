import database from "../../util/mongo_connect";
import User from "../../models/User";

export default async function login({ body: { username, password } }, res) {
  await database();

  const user = await User.findOne({
    username,
    password,
  });

  // !fixing
  if (!user) {
    console.log("error");
    return null;
  } else {
    return res.json(user);
  }
}
