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

// -----------------------------------------------------------------//
// Encrypt the password before the user is saved in the DB
usersSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});
// -----------------------------------------------------------------//
// This method is now part of userSchema, it verify if the password from the form and the password in DB  are the same
usersSchema.methods.passwordVerification = async function (formPassword) {
  return await bcrypt.compare(formPassword, this.password);
};
// -----------------------------------------------------------------//
// This model, created from the usersSchema, represents the "User" collection in MongoDB and provides methods
// to create, read, update, and delete documents in the collection.
const Users = mongoose.model("User", usersSchema);

export default Users;
