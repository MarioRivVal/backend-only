import jsonWebToken from "jsonwebtoken";
import Users from "../models/UsersSchema.js";

//// Middleware function to verify the JWT from the 'Authorization' header (Bearer Token).
// If valid, retrieves the authenticated veterinarian from the database and attaches it to the request object.

const checkAuth = async (req, res, next) => {
  let jwt;
  const auth = req.headers.authorization;
  if (auth && auth.startsWith("Bearer")) {
    try {
      jwt = auth.split(" ").at(1);

      const decoded = jsonWebToken.verify(jwt, process.env.JWT_SECRET);

      req.userProfile = await Users.findById(decoded.id).select(
        "-password -token -confirmed -__v"
      );
      return next();
    } catch (error) {
      // If the token is invalid or missing, returns a 403 error response.
      const e = new Error("Invalid Token");
      return res.status(403).json({ msg: e.message });
    }
  }
  if (!jwt) {
    const error = new Error("Invalid or non-existent token");
    res.status(403).json({ msg: error.message });
  }
  next();
};

export default checkAuth;
