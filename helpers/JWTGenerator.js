import jsonWebToken from "jsonwebtoken";

// Generate a json web token using the user id and the secret word from .env file
const JWTgenerator = (id) => {
  return jsonWebToken.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

export default JWTgenerator;
