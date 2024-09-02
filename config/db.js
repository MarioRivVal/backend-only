import mongoose from "mongoose";

const dataBaseConnection = async () => {
  try {
    const db = await mongoose.connect(process.env.MONGO_URI);
    const url = `${db.connection.host}: ${db.connection.port}`;
    console.log(`MongoDB connected at : ${url}`);
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

export default dataBaseConnection;
