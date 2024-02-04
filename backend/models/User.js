import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, "Please enter a name"],
    minlength: [2, "Minimum username length is 2 characters"],
  },
  email: {
    required: [true, "Please enter an email"],
    type: String,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: [true, "Please enter a password"],
    minlength: [6, "Minimum password length is 6 characters"],
  },
});

export const User = mongoose.model("User", userSchema);
