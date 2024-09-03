import mongoose from "mongoose";
import bcrypt from "bcrypt";
import tokenGenerator from "../helpers/tokenGenerator.js";

const usersSchema = mongoose.Schema({
  userName: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  token: {
    type: String,
    default: tokenGenerator(),
  },
  confirmed: {
    type: Boolean,
    default: false,
  },
});

// Encrypt the password before the user is saved in the DB
usersSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

// This model, created from the usersSchema, represents the "User" collection in MongoDB and provides methods
// to create, read, update, and delete documents in the collection.
const Users = mongoose.model("User", usersSchema);

export default Users;
