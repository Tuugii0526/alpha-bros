import { User } from "../model/user.model.js";

const getUser = async (req, res) => {
  const { clerk_id } = req.query;
  try {
    const user = await User.find({ clerk_id: clerk_id });

    if (user) {
      const mongo_id = user[0]._id;
      return res.status(200).json({ mongo_id });
    } else {
      return res.status(404);
    }
  } catch (error) {
    return res.status(500).json(error);
  }
};
const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    return res.status(200).json({ users });
  } catch (error) {
    return res.status(500).json({ error });
  }
};
export { getUser, getUsers };
