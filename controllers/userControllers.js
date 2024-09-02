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

export { registerNewUser, userProfile };
