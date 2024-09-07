# 🛠️ OnlyBackend

<div style="text-align:center">
<img src="https://github.com/MarioRivVal/netneodev-portfolio-v1/blob/main/public/img/logos/nodejs.png?raw=true" width="50" height="50" alt="nodejs" />
<img src="https://github.com/MarioRivVal/netneodev-portfolio-v1/blob/main/public/img/logos/express.png?raw=true" width="50" height="50" alt="express" />
<img src="https://github.com/MarioRivVal/netneodev-portfolio-v1/blob/main/public/img/logos/mongodb.png?raw=true" width="50" height="50" alt="mongodb" />
</div>

##

This repository contains a backend project designed to deepen my understanding
of backend development. The project is built using **Node.js** and various
modern technologies to implement secure user authentication and management
functionalities. The project has been completed but is easily scalable for
future extensions.

## 🚀 Technologies Used

- **Node.js**: The runtime environment for executing JavaScript code
  server-side.
- **Express.js**: A minimal and flexible Node.js web application framework.
- **MongoDB**: A NoSQL database for storing user data and other application
  information.
- **Mongoose**: An ODM (Object Data Modeling) library for MongoDB and Node.js.
- **dotenv**: A module to load environment variables from a `.env` file into
  `process.env`.
- **bcrypt**: A library for hashing passwords to enhance security.
- **JSON Web Tokens (JWT)**: Used for securely transmitting information between
  parties as a JSON object.
- **Postman**: A tool used to test API endpoints during development.

## ✨ Features

- **User Authentication**: Secure user sign-up, login, and password management.
- **Password Encryption**: User passwords are encrypted using bcrypt before
  storing in the database.
- **JWT Authentication**: User sessions are managed using JWT for secure and
  stateless authentication.
- **Protected Routes**: Middleware verifies JWT to protect private user routes.
- **Email Confirmation**: Upon registration, users receive a confirmation email
  with a verification token.
- **Password Reset**: Users can reset their password if forgotten via email
  verification.
- **API Testing with Postman**: All API endpoints are tested using Postman to
  ensure they work as expected.

## 🚧 Project Status

The project has been completed and provides a strong foundation and is easily
scalable for further features.

## 🔑License

This project is licensed under the netNeo_web License.
