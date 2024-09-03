// -----------------------------------------------------------------//
// -----------------------------------------------------------------//
import User from "../models/UsersSchema.js";

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
  res.json({ msg: "desde userProfile" });
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
  const { email } = req.body;

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

  res.json({ msg: "from userLogin" });
};

// -----------------------------------------------------------------//
export { registerNewUser, userProfile, userConfirmation, userLogin };
