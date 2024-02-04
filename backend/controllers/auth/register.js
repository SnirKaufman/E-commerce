import validator from "validator";
import { User } from "../../models/User.js";
import bcrypt from "bcrypt";

export const register = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  if (!email || !password) {
    throw Error("All fields must be filled");
  }
  if (!validator.isEmail(email)) {
    throw Error("Email is not valid");
  }

  const emailUsed = await User.findOne({ email });

  if (emailUsed) {
    throw Error("Already have an account");
  }
  try {
    const hashedPassword = await createHashedPassword(password);

    await User.create({
      name,
      email,
      password: hashedPassword,
    });
    res.status(201).json({ success: true });
  } catch {
    res.status(500).send();
  }
};

async function createHashedPassword(password) {
  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(password, salt);
  return hashedPassword;
}
