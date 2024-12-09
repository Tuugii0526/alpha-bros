import { User } from "../model/user.model.js";

const createUser = async (req, response) => {
  try {
    const { name, email, password, phoneNumber } = req.body;
    const result = await User.create({
      name,
      email,
      password,
      phoneNumber,
    });
    response.status(201).json({
      success: true,
      data: result,
    });
  } catch (error) {
    response.status(501).json({ error: "can't , create user " });
  }
};

export { createUser };
