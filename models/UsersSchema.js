import mongoose from "mongoose";
import idGenerator from "../helpers/tokenGenerator.js";
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
  confirmado: {
    type: Boolean,
    default: false,
  },
});

// This model, created from the usersSchema, represents the "User" collection in MongoDB and provides methods
// to create, read, update, and delete documents in the collection.
const Users = mongoose.model("User", usersSchema);

export default Users;
