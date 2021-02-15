import database from "../../util/mongo_connect";
import User from "../../models/User";

export default async function login({ body }, res) {
  await database();

  const get_user = await User.find({
    username: body.user,
    password: body.pass,
  });

  return res.status(200).json(get_user);
}

// export default function handler(req, res) {
//   res.status(200).json({ user: 'Ada Lovelace' })
// }

// export default function handler({ body }, res) {
//   const username = body.user;
//   const password = body.pass;
//   res.status(200).json([{ username, password }]);
// }
