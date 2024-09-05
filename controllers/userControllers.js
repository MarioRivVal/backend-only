// -----------------------------------------------------------------//
// -----------------------------------------------------------------//
import User from "../models/UsersSchema.js";
import Users from "../models/UsersSchema.js";
import JWTgenerator from "../helpers/JWTGenerator.js";
import tokenGenerator from "../helpers/tokenGenerator.js";

// -----------------------------------------------------------------//

// Register a new user
const registerNewUser = async (req, res) => {
  const { email } = req.body;

  // Check if the email is already register
  const userExists = await User.findOne({ email });
  if (userExists) {
    const error = new Error("This email is already registered");
    return res.status(400).json({ msg: error.message });
  }

  try {
    // Save the new user in the DB
    const newUser = new User(req.body);
    const savedUser = await newUser.save();
    res.json(savedUser);
  } catch (error) {
    console.log(error);
  }
};

// -----------------------------------------------------------------//

const userProfile = (req, res) => {
  res.json(req.userProfile);
};

// -----------------------------------------------------------------//
const userConfirmation = async (req, res) => {
  const { token } = req.params;
  // Find the user in the DB that match the token
  const foundUser = await User.findOne({ token });

  if (!foundUser) {
    const error = new Error("Invalid token");
    return res.status(404).json({ msg: error.message });
  }

  try {
    foundUser.token = null;
    foundUser.confirmed = true;
    await foundUser.save();
    res.json({ msg: "Your account has been confirmed" });
  } catch (error) {
    console.log(error.message);
  }
};
// -----------------------------------------------------------------//
const userLogin = async (req, res) => {
  const { email, password } = req.body;

  // Search for the user with their email in the DB and check if the user exists
  const user = await User.findOne({ email });
  if (!user) {
    const error = new Error("This user does not exist");
    return res.status(404).json({ msg: error.message });
  }

  // Check if user is confirmed
  if (!user.confirmed) {
    const error = new Error("This user has not been confirmed");
    return res.status(404).json({ msg: error.message });
  }

  // Check if the password from the form and the password in DB  are the same
  if (await user.passwordVerification(password)) {
    res.json({
      userName: user.userName,
      email: user.email,
      jwt: JWTgenerator(user._id),
      id: user._id,
    });
  } else {
    const error = new Error("Incorrect Password");
    return res.status(404).json({ msg: error.message });
  }
};
// -----------------------------------------------------------------//

const forgotPassword = async (req, res) => {
  const { email } = req.body;

  // Search the user in the DB using the email sending from the form
  const userExists = await Users.findOne({ email });

  if (!userExists) {
    const error = new Error("This user does not exists");
    return res.status(404).json({ msg: error.message });
  }

  try {
    userExists.token = tokenGenerator();
    await userExists.save();
    res.json(userExists);
  } catch (error) {
    console.log(error);
  }
};

// -----------------------------------------------------------------//
const tokenConfirmation = async (req, res) => {
  res.json({ msg: "desde tokenConfirmation" });
};
// -----------------------------------------------------------------//
const newPassword = async (req, res) => {
  res.json({ msg: "desde newPassword" });
};
// -----------------------------------------------------------------//

export {
  registerNewUser,
  userProfile,
  userConfirmation,
  userLogin,
  forgotPassword,
  tokenConfirmation,
  newPassword,
};
