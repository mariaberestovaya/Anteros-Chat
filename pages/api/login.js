import database from "../../util/mongo_connect";
import User from "../../models/User";

export default async function login(req, res) {
  await database();

  const user = await User.findOne({
    login: req.body.login,
    password: req.body.password,
  });

  //! REFACTORING
  if (!user) {
    return null;
  } else {
    return res.json(user);
  }
}
