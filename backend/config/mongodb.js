// import mongoose from "mongoose";

// const connectDB = async () => {

//     mongoose.connection.on('connected', () => console.log("Database Connected"))
//     await mongoose.connect(`${process.env.MONGODB_URL}/prescripto`)

// }

// export default connectDB;

// // Do not use '@' symbol in your databse user's password else it will show an error.

import mongoose from "mongoose";

const connectDB = async () => {
  mongoose.connection.on("connected", () => {
    console.log("Database Connected");

    // Extract the database name from the connection string
    const dbName = mongoose.connection.db.databaseName;
    console.log(`Connected to database: ${dbName}`);
  });

  try {
    await mongoose.connect(`${process.env.MONGODB_URL}/bookdoctor`);
  } catch (error) {
    console.error("Error connecting to database:", error);
  }
};

export default connectDB;

// Note: Avoid using '@' symbol in your database user's password, as it will cause an error.
