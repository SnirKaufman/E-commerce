import bcrypt from "bcrypt";
import { User } from "../../models/User.js";
import jwt from "jsonwebtoken";

export const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (user == null) {
    return res.status(400).send("Cannot find user");
  }

  try {
    const isPasswordMatch = bcrypt.compareSync(password, user.password);

    if (isPasswordMatch) {
      const accessToken = generateAccessToken(user);
      res.json({ accessToken: accessToken });
    } else {
      res.send("Not allowed");
    }
  } catch {
    res.status(500).send();
  }
};

function generateAccessToken(user) {
  return jwt.sign({ user }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "7d",
  });
}
