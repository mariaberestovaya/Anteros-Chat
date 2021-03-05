import database from "../../util/mongo_connect";
import User from "../../models/User";

//TODO при регистрации создавать новый чат

export default async function create_chat(req, res) {
  await database();

  const new_user = await User.create({
    username: req.body.username,
    login: req.body.login,
    password: req.body.password,
    description: req.body.description,
    image: req.body.image,
  });

  res.json(new_user);
}
